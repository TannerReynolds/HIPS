const ascii = require("image-to-ascii")
module.exports = {
    endpoint:"printer",
    example: "Example for <a href=\"https://cdn.discordapp.com/attachments/413822583914496022/427953452585451520/render.jpg\">plane</a>",
    process:async (req, res, param) => {
        ascii(param, { colored: false, size: { width: 28, height: 28 } }, (err, result) => {
            res.setHeader("Content-Type", "text/text")
            res.send(result)
            return res.end();
        });
    }
}