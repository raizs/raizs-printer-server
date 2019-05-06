import async from "async";

export class Async {
	static parallel(methods) {
		const wrapper = {};

		for(let key in methods) {
			wrapper[key] = async cb => {
				const response = await methods[key]();
				cb(null, response);
			};
		}

		return new Promise((resolve, reject) => {
			async.parallel(wrapper, (err, result) => resolve(result));
		});
	}
}