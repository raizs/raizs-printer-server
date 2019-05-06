/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountJournalAccountReportPartnerLedgerRel', {
		accountReportPartnerLedgerId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_report_partner_ledger',
				key: 'id'
			},
			unique: true,
			field: 'account_report_partner_ledger_id'
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
		tableName: 'account_journal_account_report_partner_ledger_rel',
		timestamps: false
	});
};
