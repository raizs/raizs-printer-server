/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountAccountFinancialReport', {
		reportLineId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_financial_report',
				key: 'id'
			},
			unique: true,
			field: 'report_line_id'
		},
		accountId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_account',
				key: 'id'
			},
			field: 'account_id'
		}
	}, {
		tableName: 'account_account_financial_report',
		timestamps: false
	});
};
