import express from "express"
import fetchCtrl from "./controller/fetchDetailsCtrl.js";
import postCtrl from "./controller/postDetailCtrl.js";
import updateCtrl from "./controller/updateDetailsCtrl.js";
import axios from 'axios'
const router=express.Router()

let userEmail;
router.route("/tabInfo").post(async(req,res)=>{
    // console.log(req.body.url);
    // console.log(req.body.userEmail);
    let url_Info;
    await axios.get(`https://api.websitecarbon.com/site?url=${req.body.url}`)
    .then(async(res)=>{
        // console.log(res.data);
        url_Info=res.data;
        try{
           await updateCtrl.updateUrlArray(req.body.userEmail,url_Info)
        }
        catch{
            console.log("Can't update");
        }
    })
    // console.log(url_Info);
})


router.route("/userInfo").post(async(req,res)=>{
    // console.log(req.body);
    userEmail=req.body.user.email;
    // console.log(userEmail);
})

async function authenticate_user(req,res,next) {
    let creds=req.get('Authorization');
    creds=creds.substr(creds.indexOf(' ')+1);
    creds=Buffer.from(creds, 'base64').toString('binary')
    creds=creds.split(':');
    try{
        const data=await fetchCtrl.getUserDetails(creds);
        // console.log(data);
        if(data.length==1){
            next();
        }
        else{
            res.status(401).end();
        }
    }
    catch{
        console.log("data not found");
        res.status(401).end();
    }
    // if(creds[0]==='t@yeah.com' && creds[1]==='123'){
    //     next();
    // }
    // else{
    //     res.status(401).end();
    // }
}

// router.get('/login',authenticate_user,async(req,res)=>{
//     res.status(200).end();
// })

router.route("/login").get(authenticate_user,async(req,res)=>{
    res.status(200).end();
})

router.route("/logout").get(async(req,res)=>{
    res.status(200).end();
})

router.route('/helloMsg').get(async(req,res)=>{
    res.send("hello");
})

async function checkerDB(req,res,next) {
    let creds=req.get('Authorization');
    creds=creds.substr(creds.indexOf(' ')+1);
    creds=Buffer.from(creds, 'base64').toString('binary')
    creds=creds.split(':');
    console.log(creds);
    try{
        const data=await fetchCtrl.getUserRegistration(creds);
        // console.log(data);
        if(data.length!=0){
            // console.log("Already");
            res.send(401).end()
        }
        else{
            // console.log("Not exist");
            try{
                await postCtrl.postUserDetails(creds)
            }
            catch{
                console.log("can't add user");
            }
            next();
        }
    }
    catch{
        console.log("Err");
        res.send(401).end()
    }
}



router.route('/getRegistration').post(checkerDB,async(req,res)=>{
    // console.log(req.headers.authorization);
    res.status(200).end();
})

router.route('/getLogin').post(authenticate_user,async(req,res)=>{
    // console.log(req.headers.authorization);
    res.status(200).end();
})

export default router