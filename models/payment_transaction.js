/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('paymentTransaction', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		createDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'create_date'
		},
		dateValidate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'date_validate'
		},
		acquirerId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'payment_acquirer',
				key: 'id'
			},
			field: 'acquirer_id'
		},
		type: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'type'
		},
		state: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'state'
		},
		stateMessage: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'state_message'
		},
		amount: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'amount'
		},
		fees: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'fees'
		},
		currencyId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'res_currency',
				key: 'id'
			},
			field: 'currency_id'
		},
		reference: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'reference'
		},
		acquirerReference: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'acquirer_reference'
		},
		partnerId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_partner',
				key: 'id'
			},
			field: 'partner_id'
		},
		partnerName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'partner_name'
		},
		partnerLang: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'partner_lang'
		},
		partnerEmail: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'partner_email'
		},
		partnerZip: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'partner_zip'
		},
		partnerAddress: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'partner_address'
		},
		partnerCity: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'partner_city'
		},
		partnerCountryId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'res_country',
				key: 'id'
			},
			field: 'partner_country_id'
		},
		partnerPhone: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'partner_phone'
		},
		html3Ds: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'html_3ds'
		},
		callbackModelId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'ir_model',
				key: 'id'
			},
			field: 'callback_model_id'
		},
		callbackResId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'callback_res_id'
		},
		callbackMethod: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'callback_method'
		},
		callbackHash: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'callback_hash'
		},
		paymentTokenId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'payment_token',
				key: 'id'
			},
			field: 'payment_token_id'
		},
		createUid: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_users',
				key: 'id'
			},
			field: 'create_uid'
		},
		writeUid: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_users',
				key: 'id'
			},
			field: 'write_uid'
		},
		writeDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'write_date'
		},
		saleOrderId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'sale_order',
				key: 'id'
			},
			field: 'sale_order_id'
		},
		invoiceId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_invoice',
				key: 'id'
			},
			field: 'invoice_id'
		},
		paypalTxnType: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'paypal_txn_type'
		}
	}, {
		tableName: 'payment_transaction',
		timestamps: false
	});
};
