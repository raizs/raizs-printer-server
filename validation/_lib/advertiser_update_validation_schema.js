export const advertiserUpdateValidationSchema = {
	"properties": {
		"email": {"type":"string", "format": "email"},
		"id": {"type":"string"},
		"password": {"type":"string"},
		"name": {"type":"string"},
		"url": {"type":"string"},
		"companyName": {"type":"string"},
		"tradeName": {"type":"string"},
		"cnpj": {"type":"string"},
		"phone": {"type":"string"},
		"city": {"type":"string"},
		"state": {"type":"string"},
		"address": {"type":"string"},
		"reset_password_token": {"type":"string"},
		"google_merchant_token": {"type":"string"},
		"google_merchant_id": {"type":"string"},
		"primaryColor": {"type":"string"},
		"secondaryColor": {"type":"string"},
		"logo": {"type":"string"},
		"cnpj": {"type":"string"},
		"route": {"type":"string"},
		"google_merchant_active": {"type":"boolean"},
		"pending": {"type":"boolean"},
		"allowed": {"type":"boolean"},
		"active": {"type":"boolean"},
		"reproved": {"type":"boolean"},
		"tx": {"type":"number"},
		"discount": {"type":"object", "properties":{
			"coupon":{"type":"string"},
			"value":{"type":"string"},
			"type":{"type":"string"},
		}
		},
	},
	"required": [ "id" ]
};
