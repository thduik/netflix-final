const checkDevOrProdEnv = () => {
    console.log("checkIsProdEnv  import.meta.env is: ", typeof import.meta.env, typeof import.meta.env === "undefined")
    return (typeof import.meta.env === "undefined") ? 'production':'development';
}

export default checkDevOrProdEnv;