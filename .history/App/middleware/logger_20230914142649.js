const fs = require("fs");
const path = require ("path");

function logger (req, res, next) {
    const method = req.method;
    const route = req.path;
    const hour = new Date().getHours().toString();
    const minute = new Date().getMinutes().toString();
    const second = new Date().getSeconds().toString();
    const day = new Date().getDate().toString();
    const month = new Date().getMonth()+1;
    const year = new Date().getFullYear();
    const messege = `Method: ${method} ** Route: ${route} ** Time: ${hour}:${minute}:${second} ** Date: ${day}/${month}/${year}\n`;
    
    fs.appendFile('logger.txt',messege,(err)=>{
        if (err) {
            console.error(err);
         }
    });
   next();
};

module.exports = logger;