/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountReconcileModel', {
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
		sequence: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'sequence'
		},
		hasSecondLine: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'has_second_line'
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
		accountId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_account',
				key: 'id'
			},
			field: 'account_id'
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
		label: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'label'
		},
		amountType: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'amount_type'
		},
		amount: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'amount'
		},
		taxId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_tax',
				key: 'id'
			},
			field: 'tax_id'
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
		secondAccountId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_account',
				key: 'id'
			},
			field: 'second_account_id'
		},
		secondJournalId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_journal',
				key: 'id'
			},
			field: 'second_journal_id'
		},
		secondLabel: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'second_label'
		},
		secondAmountType: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'second_amount_type'
		},
		secondAmount: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'second_amount'
		},
		secondTaxId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_tax',
				key: 'id'
			},
			field: 'second_tax_id'
		},
		secondAnalyticAccountId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_analytic_account',
				key: 'id'
			},
			field: 'second_analytic_account_id'
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
		tableName: 'account_reconcile_model',
		timestamps: false
	});
};
