const getallidparcelsApi={
	
	getallidparcels : (request,response) => {

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

            const id = request.params.Id;
            console.log(id);

            let x="";

            
              for(x in jsondata.users){
                    if(jsondata.users[x].Username===id){
                      jsontosend[x]=jsondata.users[x].Orders;
                    }
             }

             console.log(jsontosend);


            response.setHeader('Content-Type','application/json');
            response.send(jsontosend);         
	   }

};

module.exports= getallidparcelsApi;

//export function getallidparcelsApifunction(request,response){
//  return getallidparcelsApi.getallidparcels(request,response);

//}