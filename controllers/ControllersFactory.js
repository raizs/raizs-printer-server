import {
  PrinterController
} from ".";

export default class ControllersFactory {

	constructor(app, postgres, firebase) {


		this.printerController = new PrinterController();
		this.printerController.startServer()
		const sixteenhours = 15*60*60*1000
		setInterval(this.printerController.startServer, sixteenhours)
	}

	postControllers(url) {

  // PRINTING
    if(/^(\/api\/v1\/print)/.test(url))
		return this.printerController.print;

    return this.notFound;
	}

	getControllers(url) {


		return this.notFound;
	}

	putControllers(url) {
		return this.notFound;
	}

	deleteControllers(url) {
		return this.notFound;
	}

	notFound(){
		return 404;
	}

}
