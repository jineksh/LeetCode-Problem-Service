const dotenv = require('dotenv');
dotenv.config();

module.exports = { 
    PORT : process.env.PORT,
    MONGOURL : process.env.MONGOURL
 };

