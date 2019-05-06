/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ruleProductRel', {
		ruleId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'sale_coupon_rule',
				key: 'id'
			},
			unique: true,
			field: 'rule_id'
		},
		productId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'product_product',
				key: 'id'
			},
			field: 'product_id'
		}
	}, {
		tableName: 'rule_product_rel',
		timestamps: false
	});
};
