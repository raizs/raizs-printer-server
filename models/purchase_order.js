/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('purchaseOrder', {
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
		origin: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'origin'
		},
		partnerRef: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'partner_ref'
		},
		dateOrder: {
			type: DataTypes.DATE,
			allowNull: false,
			field: 'date_order'
		},
		dateApprove: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'date_approve'
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
		destAddressId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_partner',
				key: 'id'
			},
			field: 'dest_address_id'
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
		state: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'state'
		},
		notes: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'notes'
		},
		invoiceCount: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'invoice_count'
		},
		invoiceStatus: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'invoice_status'
		},
		pickingCount: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'picking_count'
		},
		datePlanned: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'date_planned'
		},
		amountUntaxed: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'amount_untaxed'
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
		fiscalPositionId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_fiscal_position',
				key: 'id'
			},
			field: 'fiscal_position_id'
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
		incotermId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'stock_incoterms',
				key: 'id'
			},
			field: 'incoterm_id'
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
		companyId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'res_company',
				key: 'id'
			},
			field: 'company_id'
		},
		pickingTypeId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'stock_picking_type',
				key: 'id'
			},
			field: 'picking_type_id'
		},
		groupId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'procurement_group',
				key: 'id'
			},
			field: 'group_id'
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
		totalBruto: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'total_bruto'
		},
		totalTax: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'total_tax'
		},
		totalDesconto: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'total_desconto'
		},
		totalDespesas: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'total_despesas'
		},
		totalSeguro: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'total_seguro'
		},
		totalFrete: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'total_frete'
		}
	}, {
		tableName: 'purchase_order',
		timestamps: false
	});
};
