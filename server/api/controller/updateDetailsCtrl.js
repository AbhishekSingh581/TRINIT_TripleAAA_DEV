import CarbonInsightDAO from "../dao/CarbonInsightDAO.js";

export default class updateCtrl {
    static async updateUrlArray(userEmail,tabInfo){
        try{
            await CarbonInsightDAO.updateArray(userEmail,tabInfo)
            // console.log(feedslists);
        }
        catch{
            console.log("Can't update data");
            return []
        }
    }
}
