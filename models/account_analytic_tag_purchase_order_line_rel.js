/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountAnalyticTagPurchaseOrderLineRel', {
		purchaseOrderLineId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'purchase_order_line',
				key: 'id'
			},
			unique: true,
			field: 'purchase_order_line_id'
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
		tableName: 'account_analytic_tag_purchase_order_line_rel',
		timestamps: false
	});
};
