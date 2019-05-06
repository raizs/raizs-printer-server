import fs from 'fs';

export class FileSystemUtility {

	static read(path) {
		return new Promise((resolve, reject) => {
			fs.readFile(path, (err, data) => {
				if(err) {
					reject(err);
				} else {
					resolve(data);
				}
			});
		});
	}

	static delete(path) {
		return new Promise((resolve, reject) => {
			fs.unlink(path, (err) => {
				if(err) {
					reject(err);
				} else {
					resolve();
				}
			});
		});
	}
}