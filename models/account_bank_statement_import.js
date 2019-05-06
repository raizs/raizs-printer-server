/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountBankStatementImport', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		dataFile: {
			type: "BYTEA",
			allowNull: false,
			field: 'data_file'
		},
		filename: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'filename'
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
		forceFormat: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'force_format'
		},
		fileFormat: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'file_format'
		},
		forceJournalAccount: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'force_journal_account'
		},
		journalId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_journal',
				key: 'id'
			},
			field: 'journal_id'
		}
	}, {
		tableName: 'account_bank_statement_import',
		timestamps: false
	});
};
