const express = require("express")
const router = express.Router()
const service = require("./prefix.service")

router.get("/cidr/prefix/:prefix", (req, res, next) => {
    try {
        const networks = service.getNetworks(req.params.prefix)
        const hosts = service.getHosts(req.params.prefix)
        res.json({ 
            "Addresses": networks,
            "Hosts": hosts
        })
    } catch (err) {
        next(err)
    }
})

module.exports = router