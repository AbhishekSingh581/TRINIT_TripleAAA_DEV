let user_signed_in=false;


chrome.browserAction.onClicked.addListener(function () {
    if (!user_signed_in) {
        chrome.windows.create({
            url: './popup-sign-in.html',
            width: 300,
            height: 600,
            focused: true
        })
    } else {
        chrome.windows.create({
            url: './popup-sign-out.html',
            width: 300,
            height: 600,
            focused: true
        })
    }
})

function ToServer(tab_info) {
    console.log(tab_info);
    fetch('')
    return fetch('http://localhost:5000/api/v1/carbonInsight/tabInfo',{
        method:"POST",
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify(tab_info)
    }) .then(res=>{
        return new Promise(resolve=>{
            if(res.status!=200) resolve('fail');
            resolve('success')
        })
    }).catch(err=>console.log(err))
}



function flip_user_status(signIn,user_info){
    if(signIn){
        //fetch the localhost:3000/login route
        return fetch('http://localhost:5000/api/v1/carbonInsight/login',{
            method:'GET',
            headers:{
                'Authorization':'Basic '+  btoa(`${user_info.email}:${user_info.password}`)
            }
        }).then(res=>{
            return new Promise(resolve=>{

                if(res.status!=200) resolve('fail');
                chrome.storage.local.set({userStatus:signIn,user_info},function(response){
                    if(chrome.runtime.lastError) resolve('fail');
                    user_signed_in=true;
                    resolve('success');
                })
            })
        }).catch(err=>{console.log(err)})
    }
    else if(!signIn){
        //fetch the localhost:3000/logout route
        return new Promise(resolve=>{

            chrome.storage.local.get(['userStatus','user_info'],function(response){
                if(chrome.runtime.lastError) resolve('fail');
                
                if(response.userStatus===undefined) resolve('fail')
                fetch('http://localhost:5000/api/v1/carbonInsight/logout',{
                    method:'GET',
                    headers:{
                        'Authorization':'Basic'+  btoa(`${response.user_info.email}:${response.user_info.password}`)
                    }
                }).then(res=>{
    
                        if(res.status!=200) resolve('fail');
                        chrome.storage.local.set({userStatus:signIn,user_info: []},function(response){
                            if(chrome.runtime.lastError) return 'fail';
                            user_signed_in=signIn;
                            resolve('success');
                        })
                    
                }).catch(err=>{console.log(err)})
            })
        })
    }
}

async function callCarbonAPI(details) {
    if (details.type === "main_frame") {
        if(details.url!='chrome-extension://*/*'){

            console.log(details.url);
                await fetch('http://localhost:5000/api/v1/carbonInsight/tabInfo', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        url: details.url,
                    })
                })
        }
    }
    return {};
}

chrome.runtime.onMessage.addListener((request,sender,sendResponse)=>{
   if(request.message==="activate"){
       activate()
   }
   if(request.message === 'login'){
        flip_user_status(true,request.payload)
            .then(res=>sendResponse(res))
            .catch(err=>console.log(err))
        return true;
    }
    if(request.message=='logout'){
        flip_user_status(false,null)
        .then(res=>sendResponse(res))
        .catch(err=>console.log(err))
        return true;
    }
    if (request.message === 'deactivate') {
        deactivate()
    }
});

function activate() {
    chrome.webRequest.onBeforeRequest.addListener(
        callCarbonAPI,
        { urls: ["<all_urls>"] },
        ["blocking"]
    );
}

function deactivate() {
    chrome.webRequest.onBeforeRequest.removeListener(
        callCarbonAPI,
        { urls: ["<all_urls>"] },
        ["blocking"]
    );
}
