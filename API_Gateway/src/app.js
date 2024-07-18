require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const {createProxyMiddleware} = require('http-proxy-middleware');
const PORT = process.env.PORT;

const app = express();
app.use(morgan('combined'));

app.use('/flightservice',createProxyMiddleware({target:'http://localhost:3001/',changeOrigin:true}));
app.use('/authservice',createProxyMiddleware({target:'http://localhost:3002/',changeOrigin:true}));
app.use('/bookingservice',createProxyMiddleware({target:'http://localhost:3003/',changeOrigin:true}));
app.use('/reminderservice',createProxyMiddleware({target:'http://localhost:3004/',changeOrigin:true}));

app.get('/',(req,res)=>{
    return res.json({message:'API Gateway is up & running'});
});

app.listen(PORT,()=>{
    console.log(`API Gateway is listening on PORT ${PORT}`);
});