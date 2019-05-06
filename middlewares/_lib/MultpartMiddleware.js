import { MultpartUtility } from '../../helper';

export default class MultpartMiddleware {

	static async parse(req, res, next) {
		console.log(req.files)
		const parts = await MultpartUtility.parse(req);
		req.body = parts;

		next();
	}

}