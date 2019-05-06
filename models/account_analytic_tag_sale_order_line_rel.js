/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountAnalyticTagSaleOrderLineRel', {
		saleOrderLineId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'sale_order_line',
				key: 'id'
			},
			unique: true,
			field: 'sale_order_line_id'
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
		tableName: 'account_analytic_tag_sale_order_line_rel',
		timestamps: false
	});
};
