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
    static async postUser(creds){
        // let cursor
        try{
            await CarbonInsightUser.collection("UserDetail").insertOne({"email":creds[0],"password":creds[1]},(err,res)=>{
                if (err) throw err;
                console.log("1 document inserted");
            })
            // console.log(cursor);
        }
        catch{
            // console.log("cant post the data");
        }
    }
}