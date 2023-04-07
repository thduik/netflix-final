// The reason for this config function is
// Because this project uses vite for dev server and webpack for building static files for production
// To eliminate differences between build usiing webpack and dev server using vite
// We call configApp and all configs is done based on whether or not this is dev or prod build env

import checkDevOrProdEnv from "../utils/checkTestProdEnv"
// import * as dotenv from 'dotenv' 
// see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import

const configApp = () => {
    const appEnv = checkDevOrProdEnv()
    if ( appEnv == 'production' ) {    
        // dotenv.config()
    }
}

export default configApp;