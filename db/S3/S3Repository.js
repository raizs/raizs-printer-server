export class S3Repository {
	constructor(s3, bucket){
		this.s3 = s3;
		this.bucket = bucket;
	}

	async create(body, key) {
		const params = {
			Body: body,
			Bucket: this.bucket,
			Key: key
		};

		return new Promise((resolve, reject) => {
			this.s3.putObject(params, (err, data) => {
				if(err) reject(err);
				else resolve(data);
			});
		});
	}
}