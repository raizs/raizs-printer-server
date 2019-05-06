/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountInvoiceLine', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		name: {
			type: DataTypes.TEXT,
			allowNull: false,
			field: 'name'
		},
		origin: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'origin'
		},
		sequence: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'sequence'
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
		uomId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'product_uom',
				key: 'id'
			},
			field: 'uom_id'
		},
		productId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'product_product',
				key: 'id'
			},
			field: 'product_id'
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
		priceUnit: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'price_unit'
		},
		priceSubtotal: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'price_subtotal'
		},
		priceTotal: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'price_total'
		},
		priceSubtotalSigned: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'price_subtotal_signed'
		},
		quantity: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'quantity'
		},
		discount: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'discount'
		},
		accountAnalyticId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_analytic_account',
				key: 'id'
			},
			field: 'account_analytic_id'
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
		partnerId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_partner',
				key: 'id'
			},
			field: 'partner_id'
		},
		currencyId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_currency',
				key: 'id'
			},
			field: 'currency_id'
		},
		isRoundingLine: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'is_rounding_line'
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
		layoutCategoryId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'sale_layout_category',
				key: 'id'
			},
			field: 'layout_category_id'
		},
		layoutCategorySequence: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'layout_category_sequence'
		},
		priceTax: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'price_tax'
		},
		valorDesconto: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'valor_desconto'
		},
		valorBruto: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'valor_bruto'
		},
		tributosEstimados: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'tributos_estimados'
		},
		tributosEstimadosFederais: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'tributos_estimados_federais'
		},
		tributosEstimadosEstaduais: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'tributos_estimados_estaduais'
		},
		tributosEstimadosMunicipais: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'tributos_estimados_municipais'
		},
		ruleId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_fiscal_position_tax_rule',
				key: 'id'
			},
			field: 'rule_id'
		},
		cfopId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'br_account_cfop',
				key: 'id'
			},
			field: 'cfop_id'
		},
		fiscalClassificationId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'product_fiscal_classification',
				key: 'id'
			},
			field: 'fiscal_classification_id'
		},
		productType: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'product_type'
		},
		companyFiscalType: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'company_fiscal_type'
		},
		calculateTax: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'calculate_tax'
		},
		fiscalComment: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'fiscal_comment'
		},
		icmsRuleId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_fiscal_position_tax_rule',
				key: 'id'
			},
			field: 'icms_rule_id'
		},
		taxIcmsId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_tax',
				key: 'id'
			},
			field: 'tax_icms_id'
		},
		icmsCst: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'icms_cst'
		},
		icmsCstNormal: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'icms_cst_normal'
		},
		icmsOrigem: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'icms_origem'
		},
		icmsTipoBase: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'icms_tipo_base'
		},
		incluirIpiBase: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'incluir_ipi_base'
		},
		icmsBaseCalculo: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'icms_base_calculo'
		},
		customIcmsBaseCalculo: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'custom_icms_base_calculo'
		},
		icmsValor: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'icms_valor'
		},
		icmsAliquota: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'icms_aliquota'
		},
		icmsAliquotaReducaoBase: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'icms_aliquota_reducao_base'
		},
		icmsBaseCalculoManual: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'icms_base_calculo_manual'
		},
		taxIcmsStId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_tax',
				key: 'id'
			},
			field: 'tax_icms_st_id'
		},
		icmsStTipoBase: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'icms_st_tipo_base'
		},
		icmsStValor: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'icms_st_valor'
		},
		icmsStBaseCalculo: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'icms_st_base_calculo'
		},
		icmsStAliquota: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'icms_st_aliquota'
		},
		icmsStAliquotaReducaoBase: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'icms_st_aliquota_reducao_base'
		},
		icmsStAliquotaMva: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'icms_st_aliquota_mva'
		},
		icmsStBaseCalculoManual: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'icms_st_base_calculo_manual'
		},
		temDifal: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'tem_difal'
		},
		taxIcmsInterId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_tax',
				key: 'id'
			},
			field: 'tax_icms_inter_id'
		},
		taxIcmsIntraId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_tax',
				key: 'id'
			},
			field: 'tax_icms_intra_id'
		},
		taxIcmsFcpId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_tax',
				key: 'id'
			},
			field: 'tax_icms_fcp_id'
		},
		icmsAliquotaInterPart: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'icms_aliquota_inter_part'
		},
		icmsCsosnSimples: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'icms_csosn_simples'
		},
		icmsAliquotaCredito: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'icms_aliquota_credito'
		},
		icmsValorCredito: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'icms_valor_credito'
		},
		icmsStAliquotaDeducao: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'icms_st_aliquota_deducao'
		},
		issqnRuleId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_fiscal_position_tax_rule',
				key: 'id'
			},
			field: 'issqn_rule_id'
		},
		taxIssqnId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_tax',
				key: 'id'
			},
			field: 'tax_issqn_id'
		},
		issqnTipo: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'issqn_tipo'
		},
		serviceTypeId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'br_account_service_type',
				key: 'id'
			},
			field: 'service_type_id'
		},
		issqnBaseCalculo: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'issqn_base_calculo'
		},
		issqnAliquota: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'issqn_aliquota'
		},
		issqnValor: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'issqn_valor'
		},
		l10NBrIssqnDeduction: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'l10n_br_issqn_deduction'
		},
		ipiRuleId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_fiscal_position_tax_rule',
				key: 'id'
			},
			field: 'ipi_rule_id'
		},
		taxIpiId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_tax',
				key: 'id'
			},
			field: 'tax_ipi_id'
		},
		ipiTipo: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'ipi_tipo'
		},
		ipiBaseCalculo: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'ipi_base_calculo'
		},
		ipiReducaoBc: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'ipi_reducao_bc'
		},
		ipiValor: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'ipi_valor'
		},
		ipiAliquota: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'ipi_aliquota'
		},
		ipiCst: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'ipi_cst'
		},
		ipiBaseCalculoManual: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'ipi_base_calculo_manual'
		},
		pisRuleId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_fiscal_position_tax_rule',
				key: 'id'
			},
			field: 'pis_rule_id'
		},
		taxPisId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_tax',
				key: 'id'
			},
			field: 'tax_pis_id'
		},
		pisCst: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'pis_cst'
		},
		pisTipo: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'pis_tipo'
		},
		pisBaseCalculo: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'pis_base_calculo'
		},
		pisValor: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'pis_valor'
		},
		pisAliquota: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'pis_aliquota'
		},
		pisBaseCalculoManual: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'pis_base_calculo_manual'
		},
		cofinsRuleId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_fiscal_position_tax_rule',
				key: 'id'
			},
			field: 'cofins_rule_id'
		},
		taxCofinsId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_tax',
				key: 'id'
			},
			field: 'tax_cofins_id'
		},
		cofinsCst: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'cofins_cst'
		},
		cofinsTipo: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'cofins_tipo'
		},
		cofinsBaseCalculo: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'cofins_base_calculo'
		},
		cofinsValor: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'cofins_valor'
		},
		cofinsAliquota: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'cofins_aliquota'
		},
		cofinsBaseCalculoManual: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'cofins_base_calculo_manual'
		},
		iiRuleId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_fiscal_position_tax_rule',
				key: 'id'
			},
			field: 'ii_rule_id'
		},
		taxIiId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_tax',
				key: 'id'
			},
			field: 'tax_ii_id'
		},
		iiBaseCalculo: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'ii_base_calculo'
		},
		iiAliquota: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'ii_aliquota'
		},
		iiValor: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'ii_valor'
		},
		iiValorIof: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'ii_valor_iof'
		},
		iiValorDespesas: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'ii_valor_despesas'
		},
		csllRuleId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_fiscal_position_tax_rule',
				key: 'id'
			},
			field: 'csll_rule_id'
		},
		taxCsllId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_tax',
				key: 'id'
			},
			field: 'tax_csll_id'
		},
		csllBaseCalculo: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'csll_base_calculo'
		},
		csllValor: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'csll_valor'
		},
		csllAliquota: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'csll_aliquota'
		},
		irrfRuleId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_fiscal_position_tax_rule',
				key: 'id'
			},
			field: 'irrf_rule_id'
		},
		taxIrrfId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_tax',
				key: 'id'
			},
			field: 'tax_irrf_id'
		},
		irrfBaseCalculo: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'irrf_base_calculo'
		},
		irrfValor: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'irrf_valor'
		},
		irrfAliquota: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'irrf_aliquota'
		},
		inssRuleId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_fiscal_position_tax_rule',
				key: 'id'
			},
			field: 'inss_rule_id'
		},
		taxInssId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_tax',
				key: 'id'
			},
			field: 'tax_inss_id'
		},
		inssBaseCalculo: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'inss_base_calculo'
		},
		inssValor: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'inss_valor'
		},
		inssAliquota: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'inss_aliquota'
		},
		informacaoAdicional: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'informacao_adicional'
		},
		purchaseLineId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'purchase_order_line',
				key: 'id'
			},
			field: 'purchase_line_id'
		},
		state: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'state'
		},
		itemPedidoCompra: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'item_pedido_compra'
		},
		valorFrete: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'valor_frete'
		},
		valorSeguro: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'valor_seguro'
		},
		outrasDespesas: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'outras_despesas'
		},
		subscriptionId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'sale_subscription',
				key: 'id'
			},
			field: 'subscription_id'
		},
		numeroNfse: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'numero_nfse'
		}
	}, {
		tableName: 'account_invoice_line',
		timestamps: false
	});
};
