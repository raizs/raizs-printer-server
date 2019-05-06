import RequestHandler from './RequestHandler';
import { MultpartMiddleware } from '../../middlewares';

export default class Router {

	constructor(app, postgres, firebase) {
		this.app = app;
		this.postgres = postgres;
		this.firebase = firebase;
		this.apiRootUrl = "/api/v1";
	}

	init() {
		const { app, postgres, firebase, apiRootUrl } = this;
		const handler = new RequestHandler(app, postgres, firebase);

		app.use((req, res, next) => {
			console.log("URL:", req.url);
			next();

		});

		// app.post(`${apiRootUrl}/print`, MultpartMiddleware.parse, handler.post);

		app.get(`${apiRootUrl}/*`, handler.get);
		app.post(`${apiRootUrl}/*`, handler.post);
		app.put(`${apiRootUrl}/*`, handler.put);
		app.delete(`${apiRootUrl}/*`, handler.delete);

	}
}
