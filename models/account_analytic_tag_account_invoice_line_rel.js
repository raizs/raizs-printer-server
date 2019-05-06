/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountAnalyticTagAccountInvoiceLineRel', {
		accountInvoiceLineId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_invoice_line',
				key: 'id'
			},
			unique: true,
			field: 'account_invoice_line_id'
		},
		accountAnalyticTagId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_analytic_tag',
				key: 'id'
			},
			field: 'account_analytic_tag_id'
		}
	}, {
		tableName: 'account_analytic_tag_account_invoice_line_rel',
		timestamps: false
	});
};
