module.exports = {
    getNetworks(prefix) {
        // this will need error handling eventually
        // should return an error if prefix isn't a number
        return Math.pow(2, (32 - prefix))
    },
    getHosts(prefix) {
        return Math.pow(2, (32 - prefix)) - 2
    }
}