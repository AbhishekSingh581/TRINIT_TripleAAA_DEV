const activateBtn = document.querySelector('input[name=checkbox]');
document.querySelector('button').addEventListener('click',()=>{
    chrome.runtime.sendMessage({message:'logout'},function(response){
        if(response=== 'success'){
            window.location.replace('./popup-sign-in.html')
        }
    })
})

chrome.storage.local.get(['user_info'], async function (response) {
    const resp = await fetch('http://localhost:5000/api/v1/carbonInsight/userInfo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            user: response.user_info,
        })
    })
    const data = await resp.json()

})

activateBtn.addEventListener('change', (e) => {
    if (e.target.checked) {
        chrome.runtime.sendMessage({ message: 'activate' }, function (response) {
            if (response === 'success') console.log('activated')
        })
    } else {
        chrome.runtime.sendMessage({ message: 'deactivate' }, function (response) {
            if (response === 'success') console.log('deactivated')
        })
    }
});