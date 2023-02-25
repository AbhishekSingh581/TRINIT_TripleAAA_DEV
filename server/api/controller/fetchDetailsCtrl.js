import CarbonInsightDAO from "../dao/CarbonInsightDAO.js";

export default class fetchCtrl {
    static async getUserDetails(creds){
        try{
            const feedslists=await CarbonInsightDAO.getUser(creds)
            // console.log(feedslists);
            return feedslists
        }
        catch{
            console.log("Can't fetch data");
            return []
        }
    }
    static async getUserRegistration(creds){
        try{
            const feedslists=await CarbonInsightDAO.getUserforRegistration(creds)
            // console.log(feedslists);
            return feedslists
        }
        catch{
            console.log("Can't fetch data");
            return []
        }
    }
    static async getUserData(email){
        try{
            const feedslists=await CarbonInsightDAO.getUserDataForDashBoard(email)
            // console.log(feedslists);
            return feedslists
        }
        catch{
            console.log("Can't fetch data");
            return []
        }
    }
}
