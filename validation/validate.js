import Ajv from 'ajv';
var ajv = new Ajv({allErros:true});

export const validate = function(data, schema) {
	var validate = ajv.compile(schema);
	var valid = validate(data);
	if (valid) return { validated:true, errors:null };
	else return { validated:false, errors:ajv.errorsText(validate.errors) };
};
