/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('saleOrderLine', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		orderId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'sale_order',
				key: 'id'
			},
			field: 'order_id'
		},
		name: {
			type: DataTypes.TEXT,
			allowNull: false,
			field: 'name'
		},
		sequence: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'sequence'
		},
		invoiceStatus: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'invoice_status'
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
		priceTax: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'price_tax'
		},
		priceTotal: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'price_total'
		},
		priceReduce: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'price_reduce'
		},
		priceReduceTaxinc: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'price_reduce_taxinc'
		},
		priceReduceTaxexcl: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'price_reduce_taxexcl'
		},
		discount: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'discount'
		},
		productId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'product_product',
				key: 'id'
			},
			field: 'product_id'
		},
		productUomQty: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'product_uom_qty'
		},
		productUom: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'product_uom',
				key: 'id'
			},
			field: 'product_uom'
		},
		qtyDelivered: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'qty_delivered'
		},
		qtyToInvoice: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'qty_to_invoice'
		},
		qtyInvoiced: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'qty_invoiced'
		},
		salesmanId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_users',
				key: 'id'
			},
			field: 'salesman_id'
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
		companyId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_company',
				key: 'id'
			},
			field: 'company_id'
		},
		orderPartnerId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_partner',
				key: 'id'
			},
			field: 'order_partner_id'
		},
		isDownpayment: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'is_downpayment'
		},
		state: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'state'
		},
		customerLead: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'customer_lead'
		},
		amtToInvoice: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'amt_to_invoice'
		},
		amtInvoiced: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'amt_invoiced'
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
		productPackaging: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'product_packaging',
				key: 'id'
			},
			field: 'product_packaging'
		},
		routeId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'stock_location_route',
				key: 'id'
			},
			field: 'route_id'
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
		ipiRuleId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_fiscal_position_tax_rule',
				key: 'id'
			},
			field: 'ipi_rule_id'
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
		cofinsRuleId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_fiscal_position_tax_rule',
				key: 'id'
			},
			field: 'cofins_rule_id'
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
		iiRuleId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_fiscal_position_tax_rule',
				key: 'id'
			},
			field: 'ii_rule_id'
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
		icmsCstNormal: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'icms_cst_normal'
		},
		icmsCsosnSimples: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'icms_csosn_simples'
		},
		icmsStAliquotaMva: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'icms_st_aliquota_mva'
		},
		aliquotaIcmsProprio: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'aliquota_icms_proprio'
		},
		incluirIpiBase: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'incluir_ipi_base'
		},
		icmsAliquotaReducaoBase: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'icms_aliquota_reducao_base'
		},
		icmsStAliquotaReducaoBase: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'icms_st_aliquota_reducao_base'
		},
		icmsStAliquotaDeducao: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'icms_st_aliquota_deducao'
		},
		icmsStValor: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'icms_st_valor'
		},
		temDifal: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'tem_difal'
		},
		ipiCst: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'ipi_cst'
		},
		ipiReducaoBc: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'ipi_reducao_bc'
		},
		ipiValor: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'ipi_valor'
		},
		pisCst: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'pis_cst'
		},
		cofinsCst: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'cofins_cst'
		},
		l10NBrIssqnDeduction: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'l10n_br_issqn_deduction'
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
		priceWithoutTax: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'price_without_tax'
		},
		detalhesCalculo: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'detalhes_calculo'
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
		valorFrete: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'valor_frete'
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
		isRewardLine: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'is_reward_line'
		},
		isDelivery: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'is_delivery'
		},
		basketProduct: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'product_product',
				key: 'id'
			},
			field: 'basket_product'
		},
		lotPendingQuant: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'lot_pending_quant'
		}
	}, {
		tableName: 'sale_order_line',
		timestamps: false
	});
};
