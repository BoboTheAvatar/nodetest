const express=require('express');
//import express from 'express';
//import * as rooterimport from './API/index.js'
//import {rootin} from './API/index.js'
const app=express();


//app.use(express.static('./public'));

app.use('/api', require('./API/index'));
//app.use('/api/v1', rootin());



const server=app.listen(8080, () => {
          let host=server.address().address;
          let port=server.address().port;
          console.log("server listening at http://"+host+":"+port+"/");
});