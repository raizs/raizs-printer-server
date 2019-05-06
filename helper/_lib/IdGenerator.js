const ID_LENGTH = 6;
const SERIAL_KEY_LENGTH = 20;

const POSSIBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const POSSIBLE_CHARS_KEY = POSSIBLE_CHARS.toLowerCase();

export class IdGenerator {
	static new() {
		var text = "";
	  for( var i = 0; i < ID_LENGTH; i++ )
	    text += POSSIBLE_CHARS.charAt(Math.floor(Math.random() * POSSIBLE_CHARS.length));
	  return text;
	}

	static newKey() {
		var text = "";
	  for( var i = 0; i < SERIAL_KEY_LENGTH; i++ )
	    text += POSSIBLE_CHARS_KEY.charAt(Math.floor(Math.random() * POSSIBLE_CHARS.length));
	  return text;
	}
}