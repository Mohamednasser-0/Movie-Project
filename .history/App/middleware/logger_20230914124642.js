const fs = require("fs");
const path = require ("path");

const logger = (req, res, next) =>{
    const method = req.method;
    const route = req.path;
    const hour = new Date().getHours();
    const minute = new Date().getMinutes();
    const second = new Date().getSeconds();
    const day = new Date().getDate();
    const month = new Date().getMonth()+1;
    const year = new Date().getFullYear();
    const messege = `Method: ${method} ** Route: ${route} ** Time: ${hour}:${minute}:${second} ** Date: ${day}/${month}/${year}`;
    
   const h = fs.writeFile("logger.txt",messege,{encoding:"utf-8"});
   next();
};

module.exports = logger;