import config from "./config"
export function getBaseURL(){
    return `/api/v${config.appVersion}`
}