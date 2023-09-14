// Logger middlware that save logs in logger.txt

const fs = require("fs");

const logger = (req, res, next) =>{
    const method = req.method;
    const route = req.path;
    const hour = new Date().getHours();
    const minute = new Date().getMinutes();
    const second = new Date().getSeconds();
    const time = new Date();

    const w = fs.writeFileSync("")
   next();
}