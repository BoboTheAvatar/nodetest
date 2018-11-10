const addidparcelsApi={
	
	addidparcels : (request,response) => {

		          const fs = require('fs');
              const bodyParser = require('body-parser');

              const newdata={
                                        "Id":"id151",
                                        "Info":"Headphone",
                                        "Weight":"124",
                                        "Sender":"bobobuya",
                                        "Receiver":"Uwera",
                                        "Phone": "3552574454",
                                        "Departure":"Kg45",
                                        "Destination": "KK333",
                                        "Location":"KL153",
                                        "Price": "1217",
                                        "Status":"In Progress"           
                            }

              let filedata={};

              filedata=fs.readFileSync("./API/test.json", (err, data) => {
              if (err) {
                  return err;
              }else{
                  return data;
              }

            });

            const jsondata=JSON.parse(filedata);
            //console.log(jsondata);

            const id1 =newdata.Sender;
            const t=newdata.Id;

            console.log(id1+" >> "+t);

            //console.log(jsondata.users[id1].Orders);

            //jsondata.users[id1].Orders.NewPropertyName=t;
            jsondata.users[id1].Orders[t]=newdata;




            //console.log(jsondata.users[id1].Orders[t]);
            console.log(jsondata.users[id1]);

            fs.writeFile('./API/test.json', JSON.stringify(jsondata), (err) => {
                           if (err) throw err;
                              console.log('The file has been saved!');
                      });


            response.setHeader('Content-Type','application/plain');
            response.send("Done");         
	   }

};

module.exports= addidparcelsApi;

//export function addidparcelsApifunction(request,response){
//  return addidparcelsApi.addidparcels(request,response);

//}