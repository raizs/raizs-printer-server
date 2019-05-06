export class ResponseFactory {

	static create(status, msg, data) {
		return {
			success: !!data,
			status: {
				code: status.code,
				msg: msg ? (typeof msg == 'object' ? JSON.stringify(msg) : msg) : status.msg
			},
			data
		};
	}
}
