const express = require("express");
const router = express.Router();
const fs = require("fs");
//
module.exports = (di) => {
    fs.readdirSync(__dirname).forEach(function (route) {
        route = route.split(".")[0];
        if (route === "index") {
            return;
        }

        router.use(`/${route}`, require(`./${route}`)(di));
    });

    return router;
};
