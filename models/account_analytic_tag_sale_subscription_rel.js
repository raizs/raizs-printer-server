/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountAnalyticTagSaleSubscriptionRel', {
		saleSubscriptionId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'sale_subscription',
				key: 'id'
			},
			unique: true,
			field: 'sale_subscription_id'
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
		tableName: 'account_analytic_tag_sale_subscription_rel',
		timestamps: false
	});
};
