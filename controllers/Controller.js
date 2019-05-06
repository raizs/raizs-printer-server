import { createStatus, ErrorUtility } from '../helper';
import ejs from "ejs";
import fs from "fs";

export default class Controller {
	constructor(mailer) {
		this.mailer = mailer;
		this.assert = this.assert.bind(this);
		this.sendErrorMail = this.sendErrorMail.bind(this);
	}

	getControllers(methods) {
		const controllers = {};

		for(var i in methods) {
			const method = methods[i];
			controllers[method] = this[method].bind(this);
		}
		return controllers;
	}

	get(req, res) { res.send("NOT IMPLEMENTED"); }
	post(req, res) { res.send("NOT IMPLEMENTED"); }
	put(req, res) { res.send("NOT IMPLEMENTED"); }
	delete(req, res) { res.send("NOT IMPLEMENTED"); }

	async resolvePromise(promise) {
		let result;
		let err;
		try {
			result = await promise;
		} catch(e) {
			err = e;
		}

		return { err, result };
	}

	assert(err, status, res) {
		if(!ErrorUtility.hasError(err)) return true;

		const responseStatus = ErrorUtility.createStatus(status, err);
		const response = {
			success: false,
			status: responseStatus
		};

		if(res)
			res.send(response);

		// this.sendErrorMail(responseStatus);
	}

	sendErrorMail(status) {
		const toCompile = ejs.compile(fs.readFileSync(__dirname + `/../templates/errorMail.html`, 'utf-8'));
		if(this.mailer)
			this.mailer.sendHtmlMail("team@thevelops.com", "Erro API detectado", toCompile({ code:status.code, msg:status.msg }));
	}
}
