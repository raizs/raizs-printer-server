/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountBankStatement', {
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
		reference: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'reference'
		},
		date: {
			type: DataTypes.DATEONLY,
			allowNull: false,
			field: 'date'
		},
		dateDone: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'date_done'
		},
		balanceStart: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'balance_start'
		},
		balanceEndReal: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'balance_end_real'
		},
		state: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'state'
		},
		journalId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_journal',
				key: 'id'
			},
			field: 'journal_id'
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
		totalEntryEncoding: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'total_entry_encoding'
		},
		balanceEnd: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'balance_end'
		},
		difference: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'difference'
		},
		userId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_users',
				key: 'id'
			},
			field: 'user_id'
		},
		cashboxStartId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_bank_statement_cashbox',
				key: 'id'
			},
			field: 'cashbox_start_id'
		},
		cashboxEndId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_bank_statement_cashbox',
				key: 'id'
			},
			field: 'cashbox_end_id'
		},
		messageLastPost: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'message_last_post'
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
		tableName: 'account_bank_statement',
		timestamps: false
	});
};
