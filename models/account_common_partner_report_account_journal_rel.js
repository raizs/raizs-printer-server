/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountCommonPartnerReportAccountJournalRel', {
		accountCommonPartnerReportId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_common_partner_report',
				key: 'id'
			},
			unique: true,
			field: 'account_common_partner_report_id'
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
		tableName: 'account_common_partner_report_account_journal_rel',
		timestamps: false
	});
};
