/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountAccountFinancialReportType', {
		reportId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_financial_report',
				key: 'id'
			},
			unique: true,
			field: 'report_id'
		},
		accountTypeId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_account_type',
				key: 'id'
			},
			field: 'account_type_id'
		}
	}, {
		tableName: 'account_account_financial_report_type',
		timestamps: false
	});
};
