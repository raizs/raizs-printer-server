import RequestHandler from './RequestHandler';

export default class Router {

	constructor(app, postgres, firebase) {
		this.app = app;
		this.apiRootUrl = "/api/v1";
	}

	init() {
		const { app, apiRootUrl } = this;
		const handler = new RequestHandler(app);

		app.use((req, res, next) => {
			console.log("URL:", req.url);
			next();

		});


		app.get(`${apiRootUrl}/*`, handler.get);
		app.post(`${apiRootUrl}/*`, handler.post);
		app.put(`${apiRootUrl}/*`, handler.put);
		app.delete(`${apiRootUrl}/*`, handler.delete);

	}
}
