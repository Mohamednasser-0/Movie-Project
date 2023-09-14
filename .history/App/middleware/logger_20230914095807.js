// Logger middlware that save logs in logger.txt

const fs = require("fs");

const logger = (req, res, next) =>{
    const method = req.method;
    const route = req.path;
    const hour = new Date().getHours();
    const minute = new Date().getMinutes();
    const second = new Date().getSeconds();
    const time = new Date();

   console.log('Method: ',method,' ^^ ','Route: ',route,' ^^ ','Time: ',hour,':',minute,':',second);
   console.log('Method: ',method,' ^^ ','Route: ',route,' ^^ ','Time: ',time);
   
   next();

}