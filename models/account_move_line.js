/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountMoveLine', {
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
		quantity: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'quantity'
		},
		productUomId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'product_uom',
				key: 'id'
			},
			field: 'product_uom_id'
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
		debit: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'debit'
		},
		credit: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'credit'
		},
		balance: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'balance'
		},
		debitCashBasis: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'debit_cash_basis'
		},
		creditCashBasis: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'credit_cash_basis'
		},
		balanceCashBasis: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'balance_cash_basis'
		},
		amountCurrency: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'amount_currency'
		},
		companyCurrencyId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_currency',
				key: 'id'
			},
			field: 'company_currency_id'
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
		amountResidual: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'amount_residual'
		},
		amountResidualCurrency: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'amount_residual_currency'
		},
		taxBaseAmount: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'tax_base_amount'
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
			allowNull: false,
			references: {
				model: 'account_move',
				key: 'id'
			},
			field: 'move_id'
		},
		ref: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'ref'
		},
		paymentId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_payment',
				key: 'id'
			},
			field: 'payment_id'
		},
		statementLineId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_bank_statement_line',
				key: 'id'
			},
			field: 'statement_line_id'
		},
		statementId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_bank_statement',
				key: 'id'
			},
			field: 'statement_id'
		},
		reconciled: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'reconciled'
		},
		fullReconcileId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_full_reconcile',
				key: 'id'
			},
			field: 'full_reconcile_id'
		},
		journalId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_journal',
				key: 'id'
			},
			field: 'journal_id'
		},
		blocked: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'blocked'
		},
		dateMaturity: {
			type: DataTypes.DATEONLY,
			allowNull: false,
			field: 'date_maturity'
		},
		date: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'date'
		},
		taxLineId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_tax',
				key: 'id'
			},
			field: 'tax_line_id'
		},
		analyticAccountId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_analytic_account',
				key: 'id'
			},
			field: 'analytic_account_id'
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
		invoiceId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_invoice',
				key: 'id'
			},
			field: 'invoice_id'
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
		userTypeId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_account_type',
				key: 'id'
			},
			field: 'user_type_id'
		},
		taxExigible: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'tax_exigible'
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
		expectedPayDate: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'expected_pay_date'
		},
		internalNote: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'internal_note'
		},
		nextActionDate: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'next_action_date'
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
		paymentValue: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'payment_value'
		},
		expenseId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'hr_expense',
				key: 'id'
			},
			field: 'expense_id'
		}
	}, {
		tableName: 'account_move_line',
		timestamps: false
	});
};
