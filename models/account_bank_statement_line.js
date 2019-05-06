/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountBankStatementLine', {
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
		date: {
			type: DataTypes.DATEONLY,
			allowNull: false,
			field: 'date'
		},
		amount: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'amount'
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
		bankAccountId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_partner_bank',
				key: 'id'
			},
			field: 'bank_account_id'
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
		statementId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_bank_statement',
				key: 'id'
			},
			field: 'statement_id'
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
		partnerName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'partner_name'
		},
		ref: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'ref'
		},
		note: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'note'
		},
		sequence: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'sequence'
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
		amountCurrency: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'amount_currency'
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
		moveName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'move_name'
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
		uniqueImportId: {
			type: DataTypes.STRING,
			allowNull: true,
			unique: true,
			field: 'unique_import_id'
		}
	}, {
		tableName: 'account_bank_statement_line',
		timestamps: false
	});
};
