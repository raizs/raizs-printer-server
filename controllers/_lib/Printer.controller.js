import printer from "printer";
import fs from "fs";

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

  	fs.readFile(__dirname + '/file.pdf', function (err, data) {
  		console.log(data)
	  if (err) throw err;
	});
   }
}