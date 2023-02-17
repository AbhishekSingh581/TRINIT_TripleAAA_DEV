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
}
