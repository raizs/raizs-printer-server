import { ResponseFactory } from "../../helper";
import models from '../../models';

export class Users {
	constructor(postgres) {
		this.postgres = postgres;

		this.getAll = this.getAll.bind(this);
	}

	async getAll() {
		const promise = await models.resUsers.findAll({
			attributes: { exclude: ['createdAt', 'updatedAt'] }
		});

		console.log(promise);

		return ResponseFactory.create({success: true}, {nada: 'aqui'});
	}
}