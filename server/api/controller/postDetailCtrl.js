import CarbonInsightDAO from "../dao/CarbonInsightDAO.js";

export default class postCtrl {
    static async postUserDetails(creds){
        try{
            await CarbonInsightDAO.postUser(creds)
            // console.log(feedslists);
        }
        catch{
            console.log("Can't fetch data");
            return []
        }
    }
}
