import { commonApi } from "./commonApi"
import { serverurl } from "./serverurl"



export const videoAddApi = async(reqBody)=>{
    return await commonApi('POST', `${serverurl}/videos`,reqBody)
}