import { Pool } from "pg";

export class PostgresDB {
	constructor(config) {
		this.config = config;
		this.client = null;
	}

	init() {
		const pool = new Pool(this.config);

		pool.connect((err, client, release) => {
			if(err) {
				console.log('\npostgres pool connection error:\n', err);
			}
			else {
				console.log(`POSTGRES: Pool successfully connected to ${this.config.database}.`);
				this.client = client;
			}
		});
	}
}
