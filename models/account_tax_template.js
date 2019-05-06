/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountTaxTemplate', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		chartTemplateId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_chart_template',
				key: 'id'
			},
			field: 'chart_template_id'
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			field: 'name'
		},
		typeTaxUse: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true,
			field: 'type_tax_use'
		},
		taxAdjustment: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'tax_adjustment'
		},
		amountType: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'amount_type'
		},
		active: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'active'
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
		sequence: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'sequence'
		},
		amount: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'amount'
		},
		accountId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_account_template',
				key: 'id'
			},
			field: 'account_id'
		},
		refundAccountId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_account_template',
				key: 'id'
			},
			field: 'refund_account_id'
		},
		description: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'description'
		},
		priceInclude: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'price_include'
		},
		includeBaseAmount: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'include_base_amount'
		},
		analytic: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'analytic'
		},
		taxGroupId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_tax_group',
				key: 'id'
			},
			field: 'tax_group_id'
		},
		taxExigibility: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'tax_exigibility'
		},
		cashBasisAccount: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_account_template',
				key: 'id'
			},
			field: 'cash_basis_account'
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
		deducedAccountId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_account_template',
				key: 'id'
			},
			field: 'deduced_account_id'
		},
		refundDeducedAccountId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_account_template',
				key: 'id'
			},
			field: 'refund_deduced_account_id'
		},
		domain: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'domain'
		},
		taxDiscount: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'tax_discount'
		},
		baseReduction: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'base_reduction'
		},
		amountMva: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'amount_mva'
		}
	}, {
		tableName: 'account_tax_template',
		timestamps: false
	});
};
