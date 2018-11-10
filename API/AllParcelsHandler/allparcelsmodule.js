const getallparcelsApi={
	
	getallparcels : (request,response) => {

		          const fs = require('fs');
              const bodyParser = require('body-parser');
              let jsontosend={};

              let filedata={};

              filedata=fs.readFileSync("./API/jsonfile.json", (err, data) => {
              if (err) {
                  return err;
              }else{
                  return data;
              }

            });


            const jsondata=JSON.parse(filedata);
            console.log(jsondata);

            let x="";
            
              for(x in jsondata.users){
                      jsontosend[x]=jsondata.users[x].Orders;
             }

             console.log(jsontosend);


            response.setHeader('Content-Type','application/json');
            response.send(jsontosend);         
	   }

};

module.exports= getallparcelsApi;
//export { getallparcels };

//export function getallparcelsApifunction(request,response){
//  return getallparcelsApi.getallparcels(request,response);

//}