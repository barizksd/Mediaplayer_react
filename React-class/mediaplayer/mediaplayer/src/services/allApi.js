import { commonApi } from "./commonApi"
import { serverurl } from "./serverurl"



export const videoAddApi = async()=>{
    return await commonApi('POST', `${serverurl}/videos`,reqBody)
}