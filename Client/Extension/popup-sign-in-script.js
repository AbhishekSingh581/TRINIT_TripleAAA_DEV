document.querySelector('form').addEventListener('submit',event=>{
    event.preventDefault();
    const email=document.querySelector('#email').value;
    const password=document.querySelector('#password').value;
    if(email && password){
        chrome.runtime.sendMessage({message:'login',payload:{email,password}},function(response){
            if(response=== 'success'){
                window.location.replace('./popup-sign-out.html')
            }
        })
    }
})