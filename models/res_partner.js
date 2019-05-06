/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('resPartner', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		name: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'name'
		},
		companyId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_company',
				key: 'id'
			},
			field: 'company_id'
		},
		displayName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'display_name'
		},
		date: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'date'
		},
		title: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_partner_title',
				key: 'id'
			},
			field: 'title'
		},
		parentId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_partner',
				key: 'id'
			},
			field: 'parent_id'
		},
		ref: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'ref'
		},
		lang: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: 'pt_BR',
			field: 'lang'
		},
		tz: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: 'America/Sao_Paulo',
			field: 'tz'
		},
		userId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_users',
				key: 'id'
			},
			field: 'user_id'
		},
		vat: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'vat'
		},
		website: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'website'
		},
		comment: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'comment'
		},
		creditLimit: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'credit_limit'
		},
		barcode: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'barcode'
		},
		active: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: true,
			field: 'active'
		},
		customer: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: false,
			field: 'customer'
		},
		supplier: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: false,
			field: 'supplier'
		},
		employee: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: false,
			field: 'employee'
		},
		function: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'function'
		},
		type: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: 'contact',
			field: 'type'
		},
		street: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'street'
		},
		street2: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'street2'
		},
		zip: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'zip'
		},
		city: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'city'
		},
		stateId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_country_state',
				key: 'id'
			},
			field: 'state_id'
		},
		countryId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_country',
				key: 'id'
			},
			field: 'country_id'
		},
		email: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'email'
		},
		phone: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'phone'
		},
		mobile: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'mobile'
		},
		isCompany: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: false,
			field: 'is_company'
		},
		industryId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_partner_industry',
				key: 'id'
			},
			field: 'industry_id'
		},
		color: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'color'
		},
		partnerShare: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: true,
			field: 'partner_share'
		},
		commercialPartnerId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_partner',
				key: 'id'
			},
			field: 'commercial_partner_id'
		},
		commercialPartnerCountryId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_country',
				key: 'id'
			},
			field: 'commercial_partner_country_id'
		},
		commercialCompanyName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'commercial_company_name'
		},
		companyName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'company_name'
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
			defaultValue: sequelize.now,
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
			defaultValue: sequelize.now,
			field: 'write_date'
		},
		cnpjCpf: {
			type: DataTypes.STRING,
			allowNull: true,
			unique: true,
			field: 'cnpj_cpf'
		},
		inscrEst: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'inscr_est'
		},
		rgFisica: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'rg_fisica'
		},
		inscrMun: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'inscr_mun'
		},
		suframa: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'suframa'
		},
		legalName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'legal_name'
		},
		cityId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_state_city',
				key: 'id'
			},
			field: 'city_id'
		},
		district: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'district'
		},
		number: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'number'
		},
		messageLastPost: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'message_last_post'
		},
		messageBounce: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'message_bounce'
		},
		optOut: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'opt_out'
		},
		activityDateDeadline: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'activity_date_deadline'
		},
		signupToken: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'signup_token'
		},
		signupType: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'signup_type'
		},
		signupExpiration: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'signup_expiration'
		},
		pickingWarn: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: 'no-message',
			field: 'picking_warn'
		},
		pickingWarnMsg: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'picking_warn_msg'
		},
		teamId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'crm_team',
				key: 'id'
			},
			field: 'team_id'
		},
		debitLimit: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'debit_limit'
		},
		lastTimeEntriesChecked: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'last_time_entries_checked'
		},
		invoiceWarn: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: 'no-message',
			field: 'invoice_warn'
		},
		invoiceWarnMsg: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'invoice_warn_msg'
		},
		saleWarn: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: 'no-message',
			field: 'sale_warn'
		},
		saleWarnMsg: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'sale_warn_msg'
		},
		purchaseWarn: {
			type: DataTypes.STRING,
			allowNull: true,
			defaultValue: 'no-message',
			field: 'purchase_warn'
		},
		purchaseWarnMsg: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'purchase_warn_msg'
		},
		indicadorIeDest: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'indicador_ie_dest'
		},
		sellerId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'seller_id'
		},
		lastName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'last_name'
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'description'
		},
		exchangereturn: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'exchangereturn'
		},
		deliverpolicy: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'deliverpolicy'
		},
		useHybridPaymentOption: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'use_hybrid_payment_option'
		},
		username: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'username'
		},
		password: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'password'
		},
		securityPrivacy: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'security_privacy'
		},
		cnpg: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'CNPG'
		},
		cscIdentification: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'CSCIdentification'
		},
		archiveid: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'archiveid'
		},
		urllogo: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'urllogo'
		},
		productcommisionpercentage: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'productcommisionpercentage'
		},
		categoryPercentage: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'category_percentage'
		},
		fullfillEndpoint: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'fullfill_endpoint'
		},
		catalogEndpoint: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'catalog_endpoint'
		},
		isActive: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'isActive'
		},
		merchantName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'merchant_name'
		},
		fullfilementSellerId: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'fullfilement_seller_id'
		},
		sellerType: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'seller_type'
		},
		isBetterScope: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'is_better_scope'
		},
		vtexUserId: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'vtex_user_id'
		},
		vtexCustomerId: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'vtex_customer_id'
		},
		vtexAddressId: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'vtex_address_id'
		},
		addressName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'addressName'
		},
		addressType: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'addressType'
		},
		receiverName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'receiverName'
		},
		fuid: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'fuid'
		},
		mpid: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'mpid'
		},
		addressIsDefault: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'address_is_default'
		},
		addressReceiverName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'address_receiver_name'
		},
		addressName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'address_name'
		},
		state: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'state'
		}
	}, {
		tableName: 'res_partner',
		timestamps: false
	});
};
