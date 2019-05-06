/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountReportGeneralLedgerJournalRel', {
		accountId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_report_general_ledger',
				key: 'id'
			},
			unique: true,
			field: 'account_id'
		},
		journalId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_journal',
				key: 'id'
			},
			field: 'journal_id'
		}
	}, {
		tableName: 'account_report_general_ledger_journal_rel',
		timestamps: false
	});
};
