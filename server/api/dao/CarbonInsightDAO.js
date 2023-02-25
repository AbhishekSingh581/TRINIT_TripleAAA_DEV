import { query } from "express"

let CarbonInsightUser

export default class CarbonInsightDB{
    static async injectDB(conn){
        if(CarbonInsightUser) return CarbonInsightUser
        try{
            CarbonInsightUser=conn.db(process.env.CarbonInsight_NS)
            console.log("connected to collection");
        }
        catch(e){
            console.error("error")
        }
    }
    static async getUser(creds){
        let cursor
        try{
            // console.log(creds[0],creds[1]);
            // console.log(typeof(creds[0]),typeof(creds[1]));
            cursor=await CarbonInsightUser.collection("UserDetail").find({"email":creds[0],"password":creds[1]})
            // console.log(cursor);
        }
        catch{
            console.log("cant get the data");
            return []
        }
        try{
            const feedsList=await cursor.toArray()
            // console.log(feedsList);
            return feedsList
        }
        catch{
            console.log("cant make it an array");
        }
    }
    static async getUserforRegistration(creds){
        let cursor
        try{
            // console.log(creds[0],creds[1]);
            // console.log(typeof(creds[0]),typeof(creds[1]));
            cursor=await CarbonInsightUser.collection("UserDetail").find({"email":creds[1]})
            // console.log(cursor);
        }
        catch{
            console.log("cant get the data");
            return []
        }
        try{
            const feedsList=await cursor.toArray()
            // console.log(feedsList);
            return feedsList
        }
        catch{
            console.log("cant make it an array");
        }
    }
    static async postUser(creds){
        // let cursor
        try{
            await CarbonInsightUser.collection("UserDetail").insertOne({"name":creds[0],"email":creds[1],"password":creds[2]},(err,res)=>{
                if (err) throw err;
                console.log("1 document inserted");
            })
            // console.log(cursor);
        }
        catch{
            // console.log("cant post the data");
        }
    }
    static async updateArray(userEmail,tabInfo){
        console.log(tabInfo);
        console.log(userEmail);
        // let cursor
        try{
            await CarbonInsightUser.collection("UserDetail").updateOne(
                {email:userEmail},
                { $push: {TabCarbonInfo : tabInfo}},(err,res)=>{
                    if(err) throw err;
                    console.log("updated array");
                }
            )
            // console.log(cursor);
        }
        catch{
            console.log("cant update the array");
        }
    }
    static async getUserDataForDashBoard(email){
        let cursor
        try{
            // console.log(creds[0],creds[1]);
            // console.log(typeof(creds[0]),typeof(creds[1]));
            cursor=await CarbonInsightUser.collection("UserDetail").find({"email":email})
            // console.log(cursor);
        }
        catch{
            console.log("cant get the data");
            return []
        }
        try{
            const feedsList=await cursor.toArray()
            // console.log(feedsList);
            return feedsList
        }
        catch{
            console.log("cant make it an array");
        }
    }
}