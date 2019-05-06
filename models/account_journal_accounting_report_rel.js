/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountJournalAccountingReportRel', {
		accountingReportId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'accounting_report',
				key: 'id'
			},
			unique: true,
			field: 'accounting_report_id'
		},
		accountJournalId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_journal',
				key: 'id'
			},
			field: 'account_journal_id'
		}
	}, {
		tableName: 'account_journal_accounting_report_rel',
		timestamps: false
	});
};
