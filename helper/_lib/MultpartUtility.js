import multiparty from 'multiparty';

export class MultpartUtility {
	static parse(req) {
		return new Promise((resolve, reject) => {

			const form = new multiparty.Form();

			form.parse(req, (err, fields, files) => {
				// console.log(err);
				if(err) {
					reject(err);
				} else {
					const file = files.files[0];

					let info;
					if(fields.info)
						info = JSON.parse(fields.info[0]);

					resolve({ file, info });
				}
			});
		});
	}
}