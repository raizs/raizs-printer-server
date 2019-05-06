import strftime from 'strftime';

export class Log {
	d(msg) {
		const e = new Error(msg);
		const lines = e.stack.split("\n");
		const paths = lines[2].split('/');
		const file = paths[paths.length - 1].replace(")", "") + " - ";
		const time = strftime("%I:%M:%S.%L", new Date()) + " ";

		if(typeof msg == 'object') {
			console.log(time + file);
			console.log(msg);
		} else {
			console.log(time + file + msg);
		}
	}
}

