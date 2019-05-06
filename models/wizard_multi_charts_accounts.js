/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wizardMultiChartsAccounts', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
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
		currencyId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'res_currency',
				key: 'id'
			},
			field: 'currency_id'
		},
		onlyOneChartTemplate: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'only_one_chart_template'
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
		codeDigits: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'code_digits'
		},
		saleTaxId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_tax_template',
				key: 'id'
			},
			field: 'sale_tax_id'
		},
		purchaseTaxId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_tax_template',
				key: 'id'
			},
			field: 'purchase_tax_id'
		},
		saleTaxRate: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'sale_tax_rate'
		},
		transferAccountId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_account_template',
				key: 'id'
			},
			field: 'transfer_account_id'
		},
		purchaseTaxRate: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'purchase_tax_rate'
		},
		completeTaxSet: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'complete_tax_set'
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
		}
	}, {
		tableName: 'wizard_multi_charts_accounts',
		timestamps: false
	});
};
