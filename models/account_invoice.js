/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountInvoice', {
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
		origin: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'origin'
		},
		type: {
			type: DataTypes.STRING,
			allowNull: true,
			primaryKey: true,
			field: 'type'
		},
		accessToken: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'access_token'
		},
		refundInvoiceId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_invoice',
				key: 'id'
			},
			field: 'refund_invoice_id'
		},
		number: {
			type: DataTypes.STRING,
			allowNull: true,
			unique: true,
			field: 'number'
		},
		moveName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'move_name'
		},
		reference: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'reference'
		},
		referenceType: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'reference_type'
		},
		comment: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'comment'
		},
		state: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'state'
		},
		sent: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'sent'
		},
		dateInvoice: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'date_invoice'
		},
		dateDue: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'date_due'
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
		paymentTermId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_payment_term',
				key: 'id'
			},
			field: 'payment_term_id'
		},
		date: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'date'
		},
		accountId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_account',
				key: 'id'
			},
			field: 'account_id'
		},
		moveId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_move',
				key: 'id'
			},
			field: 'move_id'
		},
		amountUntaxed: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'amount_untaxed'
		},
		amountUntaxedSigned: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'amount_untaxed_signed'
		},
		amountTax: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'amount_tax'
		},
		amountTotal: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'amount_total'
		},
		amountTotalSigned: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'amount_total_signed'
		},
		amountTotalCompanySigned: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'amount_total_company_signed'
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
		journalId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_journal',
				key: 'id'
			},
			field: 'journal_id'
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
		reconciled: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'reconciled'
		},
		partnerBankId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_partner_bank',
				key: 'id'
			},
			field: 'partner_bank_id'
		},
		residual: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'residual'
		},
		residualSigned: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'residual_signed'
		},
		residualCompanySigned: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'residual_company_signed'
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
		fiscalPositionId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_fiscal_position',
				key: 'id'
			},
			field: 'fiscal_position_id'
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
		cashRoundingId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_cash_rounding',
				key: 'id'
			},
			field: 'cash_rounding_id'
		},
		messageLastPost: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'message_last_post'
		},
		activityDateDeadline: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'activity_date_deadline'
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
		teamId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'crm_team',
				key: 'id'
			},
			field: 'team_id'
		},
		partnerShippingId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_partner',
				key: 'id'
			},
			field: 'partner_shipping_id'
		},
		incotermsId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'stock_incoterms',
				key: 'id'
			},
			field: 'incoterms_id'
		},
		totalTax: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'total_tax'
		},
		productSerieId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'br_account_document_serie',
				key: 'id'
			},
			field: 'product_serie_id'
		},
		productDocumentId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'br_account_fiscal_document',
				key: 'id'
			},
			field: 'product_document_id'
		},
		serviceSerieId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'br_account_document_serie',
				key: 'id'
			},
			field: 'service_serie_id'
		},
		serviceDocumentId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'br_account_fiscal_document',
				key: 'id'
			},
			field: 'service_document_id'
		},
		fiscalComment: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'fiscal_comment'
		},
		totalBruto: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'total_bruto'
		},
		totalDesconto: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'total_desconto'
		},
		icmsBase: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'icms_base'
		},
		icmsValue: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'icms_value'
		},
		icmsStBase: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'icms_st_base'
		},
		icmsStValue: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'icms_st_value'
		},
		valorIcmsFcpUfDest: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'valor_icms_fcp_uf_dest'
		},
		valorIcmsUfDest: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'valor_icms_uf_dest'
		},
		valorIcmsUfRemet: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'valor_icms_uf_remet'
		},
		issqnBase: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'issqn_base'
		},
		issqnValue: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'issqn_value'
		},
		issqnRetention: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'issqn_retention'
		},
		ipiBase: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'ipi_base'
		},
		ipiBaseOther: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'ipi_base_other'
		},
		ipiValue: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'ipi_value'
		},
		pisBase: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'pis_base'
		},
		pisValue: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'pis_value'
		},
		pisRetention: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'pis_retention'
		},
		cofinsBase: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'cofins_base'
		},
		cofinsValue: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'cofins_value'
		},
		cofinsRetention: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'cofins_retention'
		},
		iiBase: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'ii_base'
		},
		iiValue: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'ii_value'
		},
		csllBase: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'csll_base'
		},
		csllValue: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'csll_value'
		},
		csllRetention: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'csll_retention'
		},
		irrfBase: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'irrf_base'
		},
		irrfValue: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'irrf_value'
		},
		irrfRetention: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'irrf_retention'
		},
		inssBase: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'inss_base'
		},
		inssValue: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'inss_value'
		},
		inssRetention: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'inss_retention'
		},
		totalTributosFederais: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'total_tributos_federais'
		},
		totalTributosEstaduais: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'total_tributos_estaduais'
		},
		totalTributosMunicipais: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'total_tributos_municipais'
		},
		totalTributosEstimados: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'total_tributos_estimados'
		},
		purchaseId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'purchase_order',
				key: 'id'
			},
			field: 'purchase_id'
		},
		paymentModeId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'payment_mode',
				key: 'id'
			},
			field: 'payment_mode_id'
		},
		internalNumber: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'internal_number'
		},
		freightResponsibility: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'freight_responsibility'
		},
		carrierId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'delivery_carrier',
				key: 'id'
			},
			field: 'carrier_id'
		},
		shippingSupplierId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_partner',
				key: 'id'
			},
			field: 'shipping_supplier_id'
		},
		vehiclePlate: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'vehicle_plate'
		},
		vehicleStateId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_country_state',
				key: 'id'
			},
			field: 'vehicle_state_id'
		},
		vehicleRntc: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'vehicle_rntc'
		},
		towPlate: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'tow_plate'
		},
		towStateId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_country_state',
				key: 'id'
			},
			field: 'tow_state_id'
		},
		towRntc: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'tow_rntc'
		},
		weight: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'weight'
		},
		weightNet: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'weight_net'
		},
		numberOfPackages: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'number_of_packages'
		},
		kindOfPackages: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'kind_of_packages'
		},
		brandOfPackages: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'brand_of_packages'
		},
		notationOfPackages: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'notation_of_packages'
		},
		ufSaidaPaisId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_country_state',
				key: 'id'
			},
			field: 'uf_saida_pais_id'
		},
		localEmbarque: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'local_embarque'
		},
		localDespacho: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'local_despacho'
		},
		numeroNfse: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'numero_nfse'
		},
		xStudioField4UjMg: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'x_studio_field_4ujMG'
		}
	}, {
		tableName: 'account_invoice',
		timestamps: false
	});
};
