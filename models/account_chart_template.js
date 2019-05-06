/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountChartTemplate', {
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
		companyId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_company',
				key: 'id'
			},
			field: 'company_id'
		},
		parentId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_chart_template',
				key: 'id'
			},
			field: 'parent_id'
		},
		codeDigits: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'code_digits'
		},
		visible: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'visible'
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
		useAngloSaxon: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'use_anglo_saxon'
		},
		completeTaxSet: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'complete_tax_set'
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
		transferAccountId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_account_template',
				key: 'id'
			},
			field: 'transfer_account_id'
		},
		incomeCurrencyExchangeAccountId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_account_template',
				key: 'id'
			},
			field: 'income_currency_exchange_account_id'
		},
		expenseCurrencyExchangeAccountId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_account_template',
				key: 'id'
			},
			field: 'expense_currency_exchange_account_id'
		},
		propertyAccountReceivableId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_account_template',
				key: 'id'
			},
			field: 'property_account_receivable_id'
		},
		propertyAccountPayableId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_account_template',
				key: 'id'
			},
			field: 'property_account_payable_id'
		},
		propertyAccountExpenseCategId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_account_template',
				key: 'id'
			},
			field: 'property_account_expense_categ_id'
		},
		propertyAccountIncomeCategId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_account_template',
				key: 'id'
			},
			field: 'property_account_income_categ_id'
		},
		propertyAccountExpenseId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_account_template',
				key: 'id'
			},
			field: 'property_account_expense_id'
		},
		propertyAccountIncomeId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_account_template',
				key: 'id'
			},
			field: 'property_account_income_id'
		},
		propertyStockAccountInputCategId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_account_template',
				key: 'id'
			},
			field: 'property_stock_account_input_categ_id'
		},
		propertyStockAccountOutputCategId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_account_template',
				key: 'id'
			},
			field: 'property_stock_account_output_categ_id'
		},
		propertyStockValuationAccountId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_account_template',
				key: 'id'
			},
			field: 'property_stock_valuation_account_id'
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
		tableName: 'account_chart_template',
		timestamps: false
	});
};
