/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountJournalAccountTaxReportRel', {
		accountTaxReportId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_tax_report',
				key: 'id'
			},
			unique: true,
			field: 'account_tax_report_id'
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
		tableName: 'account_journal_account_tax_report_rel',
		timestamps: false
	});
};
