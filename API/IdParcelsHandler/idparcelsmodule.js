const getidparcelsApi={
	
	getidparcels : (request,response) => {

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
            //console.log(jsondata);

            const id = request.params.parcelId;
            console.log(id);

            let x="";
            let y="";

              for(x in jsondata.users){
                for(y in jsondata.users[x].Orders){
                   console.log(jsondata.users[x].Orders[y]);
                    if(jsondata.users[x].Orders[y].Id===id){
                      jsontosend[y]=jsondata.users[x].Orders[y];
                    }
                }
             }

             console.log(jsontosend);


            response.setHeader('Content-Type','application/json');
            response.send(jsontosend);         
	   }

};

module.exports= getidparcelsApi;

//export function getidparcelsApifunction(request,response){
//  return getidparcelsApi.getidparcels(request,response);
//}