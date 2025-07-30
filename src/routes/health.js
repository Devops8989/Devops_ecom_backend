const router = require("express").Router();

router.get("/healthz", (req, res) => res.status(200).send("ok"));
router.get("/readyz", (req, res) => res.status(200).send("ready"));

module.exports = router;
