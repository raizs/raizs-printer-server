/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('purchaseOrderStockPickingRel', {
		purchaseOrderId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'purchase_order',
				key: 'id'
			},
			unique: true,
			field: 'purchase_order_id'
		},
		stockPickingId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'stock_picking',
				key: 'id'
			},
			field: 'stock_picking_id'
		}
	}, {
		tableName: 'purchase_order_stock_picking_rel',
		timestamps: false
	});
};
