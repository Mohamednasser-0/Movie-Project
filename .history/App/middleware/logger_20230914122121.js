const logger = (req, res, next) =>{
    const method = req.method;
    const route = req.path;
    const hour = new Date().getHours();
    const minute = new Date().getMinutes();
    const second = new Date().getSeconds();
    const day = new Date().getDay();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    const date = n

   console.log('Method: ',method,' ^^ ','Route: ',route,' ^^ ','Time: ',hour,':',minute,':',second,' ^^ ','Date: ',day,'/',month,'/',year);
   next();
};

module.exports = logger;