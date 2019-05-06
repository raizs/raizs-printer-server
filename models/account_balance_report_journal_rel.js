/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountBalanceReportJournalRel', {
		accountId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_balance_report',
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
		tableName: 'account_balance_report_journal_rel',
		timestamps: false
	});
};
