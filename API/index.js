const express= require('express');
//import express from 'express';
const router = express.Router();

let AllParcelsApi=require('./AllParcelsHandler/allparcelsmodule');
//import * as AllParcelsApi from './AllParcelsHandler/allparcelsmodule';

let IdParcelsApi=require('./IdParcelsHandler/idparcelsmodule');
//import * as IdParcelsApi from './IdParcelsHandler/idparcelsmodule';

let AllIdParcelsApi=require('./AllIdParcelsHandler/allidparcelsmodule');
//import * as AllIdParcelsApi from './AllIdParcelsHandler/allidparcelsmodule';

let CancelIdParcelsApi=require('./CancelIdParcelsHandler/cancelidparcelsmodule');
//import * as CancelIdParcelsApi from './CancelIdParcelsHandler/cancelidparcelsmodule';

let AddIdParcelsApi=require('./AddIdParcelsHandler/addidparcelsmodule');
//import * as AddIdParcelsApi from './AddIdParcelsHandler/addidparcelsmodule';

let LocationIdParcelsApi=require('./LocationIdParcelsHandler/locationidparcelsmodule');
//import * as LocationIdParcelsApi from './LocationIdParcelsHandler/locationidparcelsmodule';

let DeliveredIdParcelsApi=require('./DeliveredIdParcelsHandler/deliveredidparcelsmodule');
//import * as DeliveredIdParcelsApi from './DeliveredIdParcelsHandler/deliveredidparcelsmodule';


router.get('/parcels',AllParcelsApi.getallparcels); //Done Testing
router.get('/parcels/:parcelId',IdParcelsApi.getidparcels); //Done Testing
router.get('/users/:Id/parcels',AllIdParcelsApi.getallidparcels); //Done Testing
router.put('/parcels/:Id/cancel',CancelIdParcelsApi.cancelidparcels); // Testing>>
router.post('/parcels',AddIdParcelsApi.addidparcels); // Testing>>
router.put('/parcels/:Id/location',LocationIdParcelsApi.locationidparcels); //Testing>>
router.put('/parcels/:Id/delivered',DeliveredIdParcelsApi.deliveredidparcels); //Testing>>

module.exports=router;

//export function rootin(){
//	return router;
//}