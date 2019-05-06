import printer from "printer";
import fs from "fs";
import { spawn, exec } from 'child_process';
import { join } from 'async-child-process';
import ngrok from "ngrok"
import axios from "axios"

export class PrinterController {

	async print({body, files}) {
	  	console.log('\n\nUHUL')
	  	console.log(files)
  	// const printers = printer.getPrinters()
  	// console.log(printers)
	 //  	printer.printDirect({data:files.file.data,
	 //  		type:"pdf",
		//     printer: "Raizs-Mada", // printer name, if missing then will print to default printer
		//     success:function(jobID){
		//       console.log("sent to printer with ID: "+jobID);
		//     },
		//     error:function(err){
		//       console.log(err);
		//     }
		// });

 //  	fs.readFile(__dirname + '/file.pdf', function (err, data) {
 //  		console.log(data)
	//   if (err) throw err;
	// });
		return {
			"success": true		
		}
   }


	async startServer(){
		await ngrok.kill()
		await ngrok.disconnect()
		const address = await ngrok.connect(3300);
		const url = "http://raizs.odoo.com/print-address/set"
		const body = {
			params:{
				address: address,
			}
		}
		axios.post(url, body)
			.then(function (response) {
			console.log(response);
			})
			.catch(function (error) {
			console.log("error");
			});

	}
}
		
