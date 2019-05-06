import ControllersFactory from '../../controllers/ControllersFactory';

export default class RequestHandler {

	constructor(app, postgres, firebase) {
		this.controllersFactory = new ControllersFactory(app, postgres, firebase);

		this.get = this.get.bind(this);
		this.post = this.post.bind(this);
		this.put = this.put.bind(this);
		this.delete = this.delete.bind(this);
	}

	async get(req, res) {
		const { url, params, query } = req;
		const response = await this.controllersFactory.getControllers(url)({ params, query });
		res.send(response);
	}

	async post(req, res) {
		const { url, body, params, query, files } = req;
		const response = await this.controllersFactory.postControllers(url)({ body, params, query, files });
		res.send(response);
	}

	async put(req, res) {
		const { url, body, params, query } = req;
		const response = await this.controllersFactory.putControllers(url)({ body, params, query });
		res.send(response);
	}

	async delete(req, res) {
		const { url, body, params, query } = req;
		const response = await this.controllersFactory.deleteControllers(url)({ params, query });
		res.send(response);
	}
}
