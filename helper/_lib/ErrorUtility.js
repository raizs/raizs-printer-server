import { Log } from "../";

export class ErrorUtility {
	static createStatus(status, msg) {
		const errorMsg = msg ? (typeof msg == "string" ? msg : JSON.stringify(msg)) : status.msg;

		return { code: status.code, msg: errorMsg };
	}

	static hasError(err) {
		if(err) {
			if(typeof err == 'object') err = JSON.stringify(err, null, 2);
			const e = new Error(err);
			const stack = e.stack;
			const line = stack.split('\n')[4];
			const paths = line.split('/');
			const file = paths[paths.length - 1];

			Log.d("---- Error in file " + file.replace(")", ""));
			Log.d(err);
		}
		return !!err;
	}
}