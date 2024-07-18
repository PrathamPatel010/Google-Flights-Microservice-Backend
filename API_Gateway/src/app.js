require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const {createProxyMiddleware} = require('http-proxy-middleware');
const rateLimit = require('express-rate-limit');
const { FLIGHTSERVICE, AUTHSERVICE, BOOKINGSERVICE, REMINDERSERVICE } = require('./config/serverConfig');
const PORT = process.env.PORT;

const app = express();

// rate limiter
// here we are allowing maximum 5 requests per minute coming from same IP
const limiter = rateLimit({
    windowMs: 1*60*1000,
    max: 5
});

app.use(morgan('combined'));    // logger 
app.use(limiter);

// request redirection to appropriate service
app.use('/flightservice',createProxyMiddleware({target:FLIGHTSERVICE,changeOrigin:true}));
app.use('/authservice',createProxyMiddleware({target:AUTHSERVICE,changeOrigin:true}));
app.use('/bookingservice',createProxyMiddleware({target:BOOKINGSERVICE,changeOrigin:true}));
app.use('/reminderservice',createProxyMiddleware({target:REMINDERSERVICE,changeOrigin:true}));

app.get('/',(req,res)=>{
    return res.json({message:'API Gateway is up & running'});
});
app.listen(PORT,()=>{
    console.log(`API Gateway is listening on PORT ${PORT}`);
});