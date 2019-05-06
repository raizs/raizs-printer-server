/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('saleCouponProgramSaleOrderRel', {
		saleOrderId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'sale_order',
				key: 'id'
			},
			unique: true,
			field: 'sale_order_id'
		},
		saleCouponProgramId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'sale_coupon_program',
				key: 'id'
			},
			field: 'sale_coupon_program_id'
		}
	}, {
		tableName: 'sale_coupon_program_sale_order_rel',
		timestamps: false
	});
};
