/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('purchaseOrderLine', {
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
		sequence: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'sequence'
		},
		productQty: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'product_qty'
		},
		datePlanned: {
			type: DataTypes.DATE,
			allowNull: false,
			field: 'date_planned'
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
		productId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'product_product',
				key: 'id'
			},
			field: 'product_id'
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
		priceTax: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'price_tax'
		},
		orderId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'purchase_order',
				key: 'id'
			},
			field: 'order_id'
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
		state: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'state'
		},
		qtyInvoiced: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'qty_invoiced'
		},
		qtyReceived: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'qty_received'
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
		orderpointId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'stock_warehouse_orderpoint',
				key: 'id'
			},
			field: 'orderpoint_id'
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
		discount: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'discount'
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
		}
	}, {
		tableName: 'purchase_order_line',
		timestamps: false
	});
};
