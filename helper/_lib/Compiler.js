import ejs from "ejs";
import fs from "fs";
import path from "path";
const PATH = __dirname + '/../../templates/';

export class Compiler {
	static compile(file, info) {
		const toCompile = ejs.compile(fs.readFileSync(path.join(PATH, file), 'utf-8'));
		return toCompile(info);
	}
}