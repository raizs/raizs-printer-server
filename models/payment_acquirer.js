/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('paymentAcquirer', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'name'
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'description'
		},
		sequence: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'sequence'
		},
		provider: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'provider'
		},
		companyId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'res_company',
				key: 'id'
			},
			field: 'company_id'
		},
		viewTemplateId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'ir_ui_view',
				key: 'id'
			},
			field: 'view_template_id'
		},
		registrationViewTemplateId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'ir_ui_view',
				key: 'id'
			},
			field: 'registration_view_template_id'
		},
		environment: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'environment'
		},
		websitePublished: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'website_published'
		},
		captureManually: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'capture_manually'
		},
		journalId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_journal',
				key: 'id'
			},
			field: 'journal_id'
		},
		specificCountries: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'specific_countries'
		},
		preMsg: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'pre_msg'
		},
		postMsg: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'post_msg'
		},
		pendingMsg: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'pending_msg'
		},
		doneMsg: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'done_msg'
		},
		cancelMsg: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'cancel_msg'
		},
		errorMsg: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'error_msg'
		},
		saveToken: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'save_token'
		},
		feesActive: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'fees_active'
		},
		feesDomFixed: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'fees_dom_fixed'
		},
		feesDomVar: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'fees_dom_var'
		},
		feesIntFixed: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'fees_int_fixed'
		},
		feesIntVar: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'fees_int_var'
		},
		moduleId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'ir_module_module',
				key: 'id'
			},
			field: 'module_id'
		},
		paymentFlow: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'payment_flow'
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
		createDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'create_date'
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
		paypalEmailAccount: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'paypal_email_account'
		},
		paypalSellerAccount: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'paypal_seller_account'
		},
		paypalUseIpn: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'paypal_use_ipn'
		},
		paypalPdtToken: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'paypal_pdt_token'
		},
		paypalApiEnabled: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'paypal_api_enabled'
		},
		paypalApiUsername: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'paypal_api_username'
		},
		paypalApiPassword: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'paypal_api_password'
		},
		paypalApiAccessToken: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'paypal_api_access_token'
		},
		paypalApiAccessTokenValidity: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'paypal_api_access_token_validity'
		}
	}, {
		tableName: 'payment_acquirer',
		timestamps: false
	});
};
