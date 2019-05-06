import AWS from "aws-sdk";

export class S3DataSource {

	constructor() {
		this.S3 = new AWS.S3();
	}

	async getObject(options) {
		return new Promise(async resolve => {
			this.S3.getObject(options, (error, data) => {
				const result = error ? null : data.Body.toString();
				resolve({ error, result });
			});
		});
	}
}