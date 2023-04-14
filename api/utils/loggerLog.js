const enableLog = process.env.ENABLE_LOGGING || true;

console.log("enableLogIs: ", enableLog)
const loggerLog = (args) => {
    if (!enableLog) {
        console.log("logging disabled");
        return;
    }

    console.log(args);
}

module.exports = loggerLog;