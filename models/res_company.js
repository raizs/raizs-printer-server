/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('resCompany', {
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
			unique: true,
			field: 'name'
		},
		partnerId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'res_partner',
				key: 'id'
			},
			field: 'partner_id'
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
		sequence: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'sequence'
		},
		parentId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_company',
				key: 'id'
			},
			field: 'parent_id'
		},
		reportHeader: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'report_header'
		},
		reportFooter: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'report_footer'
		},
		logoWeb: {
			type: "BYTEA",
			allowNull: true,
			field: 'logo_web'
		},
		accountNo: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'account_no'
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
		companyRegistry: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'company_registry'
		},
		paperformatId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'report_paperformat',
				key: 'id'
			},
			field: 'paperformat_id'
		},
		externalReportLayout: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'external_report_layout'
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
		nfeA1File: {
			type: "BYTEA",
			allowNull: true,
			field: 'nfe_a1_file'
		},
		nfeA1Password: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'nfe_a1_password'
		},
		propagationMinimumDelta: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'propagation_minimum_delta'
		},
		internalTransitLocationId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'stock_location',
				key: 'id'
			},
			field: 'internal_transit_location_id'
		},
		fiscalyearLastDay: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'fiscalyear_last_day'
		},
		fiscalyearLastMonth: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'fiscalyear_last_month'
		},
		periodLockDate: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'period_lock_date'
		},
		fiscalyearLockDate: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'fiscalyear_lock_date'
		},
		transferAccountId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_account',
				key: 'id'
			},
			field: 'transfer_account_id'
		},
		expectsChartOfAccounts: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'expects_chart_of_accounts'
		},
		chartTemplateId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_chart_template',
				key: 'id'
			},
			field: 'chart_template_id'
		},
		bankAccountCodePrefix: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'bank_account_code_prefix'
		},
		cashAccountCodePrefix: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'cash_account_code_prefix'
		},
		accountsCodeDigits: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'accounts_code_digits'
		},
		taxCashBasisJournalId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_journal',
				key: 'id'
			},
			field: 'tax_cash_basis_journal_id'
		},
		taxCalculationRoundingMethod: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'tax_calculation_rounding_method'
		},
		currencyExchangeJournalId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_journal',
				key: 'id'
			},
			field: 'currency_exchange_journal_id'
		},
		angloSaxonAccounting: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'anglo_saxon_accounting'
		},
		propertyStockAccountInputCategId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_account',
				key: 'id'
			},
			field: 'property_stock_account_input_categ_id'
		},
		propertyStockAccountOutputCategId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_account',
				key: 'id'
			},
			field: 'property_stock_account_output_categ_id'
		},
		propertyStockValuationAccountId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_account',
				key: 'id'
			},
			field: 'property_stock_valuation_account_id'
		},
		overdueMsg: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'overdue_msg'
		},
		taxExigibility: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'tax_exigibility'
		},
		accountOpeningMoveId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_move',
				key: 'id'
			},
			field: 'account_opening_move_id'
		},
		accountSetupCompanyDataDone: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'account_setup_company_data_done'
		},
		accountSetupBankDataDone: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'account_setup_bank_data_done'
		},
		accountSetupFyDataDone: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'account_setup_fy_data_done'
		},
		accountSetupCoaDone: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'account_setup_coa_done'
		},
		accountSetupBarClosed: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'account_setup_bar_closed'
		},
		daysBetweenTwoFollowups: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'days_between_two_followups'
		},
		currencyIntervalUnit: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'currency_interval_unit'
		},
		currencyNextExecutionDate: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'currency_next_execution_date'
		},
		currencyProvider: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'currency_provider'
		},
		lastCurrencySyncDate: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'last_currency_sync_date'
		},
		saleNote: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'sale_note'
		},
		securityLead: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'security_lead'
		},
		fiscalDocumentForProductId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'br_account_fiscal_document',
				key: 'id'
			},
			field: 'fiscal_document_for_product_id'
		},
		annualRevenue: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'annual_revenue'
		},
		fiscalType: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'fiscal_type'
		},
		cnaeMainId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'br_account_cnae',
				key: 'id'
			},
			field: 'cnae_main_id'
		},
		accountantId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_partner',
				key: 'id'
			},
			field: 'accountant_id'
		},
		poLead: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'po_lead'
		},
		poLock: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'po_lock'
		},
		poDoubleValidation: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'po_double_validation'
		},
		poDoubleValidationAmount: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'po_double_validation_amount'
		},
		tipoAmbienteNfse: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'tipo_ambiente_nfse'
		},
		nfeEmailTemplate: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'mail_template',
				key: 'id'
			},
			field: 'nfe_email_template'
		},
		tipoAmbiente: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'tipo_ambiente'
		},
		cabecalhoDanfe: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'cabecalho_danfe'
		},
		vtexApiKey: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'vtex_api_key'
		},
		apiKeyToken: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'api_key_token'
		},
		vtexAccountName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'vtex_account_name'
		},
		vtexEnvironment: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'vtex_environment'
		},
		vtexFiscalPositionMoved0: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'vtex_fiscal_position_moved0'
		},
		resourceCalendarId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'resource_calendar',
				key: 'id'
			},
			field: 'resource_calendar_id'
		},
		salesToSave: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'sales_to_save'
		},
		lastSaleUpdated: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'last_sale_updated'
		},
		socialTwitter: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'social_twitter'
		},
		socialFacebook: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'social_facebook'
		},
		socialGithub: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'social_github'
		},
		socialLinkedin: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'social_linkedin'
		},
		socialYoutube: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'social_youtube'
		},
		socialGoogleplus: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'social_googleplus'
		},
		manufacturingLead: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'manufacturing_lead'
		},
		vtexFiscalPosition: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_fiscal_position',
				key: 'id'
			},
			field: 'vtex_fiscal_position'
		}
	}, {
		tableName: 'res_company',
		timestamps: false
	});
};
