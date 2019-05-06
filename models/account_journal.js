/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountJournal', {
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
			primaryKey: true,
			field: 'name'
		},
		code: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			field: 'code'
		},
		active: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'active'
		},
		type: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'type'
		},
		defaultCreditAccountId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_account',
				key: 'id'
			},
			field: 'default_credit_account_id'
		},
		defaultDebitAccountId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_account',
				key: 'id'
			},
			field: 'default_debit_account_id'
		},
		updatePosted: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'update_posted'
		},
		groupInvoiceLines: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'group_invoice_lines'
		},
		sequenceId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'ir_sequence',
				key: 'id'
			},
			field: 'sequence_id'
		},
		refundSequenceId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'ir_sequence',
				key: 'id'
			},
			field: 'refund_sequence_id'
		},
		sequence: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'sequence'
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
			allowNull: false,
			references: {
				model: 'res_company',
				key: 'id'
			},
			field: 'company_id'
		},
		refundSequence: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'refund_sequence'
		},
		atLeastOneInbound: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'at_least_one_inbound'
		},
		atLeastOneOutbound: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'at_least_one_outbound'
		},
		profitAccountId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_account',
				key: 'id'
			},
			field: 'profit_account_id'
		},
		lossAccountId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_account',
				key: 'id'
			},
			field: 'loss_account_id'
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
		bankStatementsSource: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'bank_statements_source'
		},
		showOnDashboard: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'show_on_dashboard'
		},
		color: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'color'
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
		batchDepositSequenceId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'ir_sequence',
				key: 'id'
			},
			field: 'batch_deposit_sequence_id'
		}
	}, {
		tableName: 'account_journal',
		timestamps: false
	});
};
