import express from "express"
import fetchCtrl from "./controller/fetchDetailsCtrl.js";

const router=express.Router()

let userEmail;
router.route("/tabInfo").post(async(req,res)=>{
    console.log(req.body.url);
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

export default router