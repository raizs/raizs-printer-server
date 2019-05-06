/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('saleOrderLineStockProductionLotRel', {
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
		stockProductionLotId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'stock_production_lot',
				key: 'id'
			},
			field: 'stock_production_lot_id'
		}
	}, {
		tableName: 'sale_order_line_stock_production_lot_rel',
		timestamps: false
	});
};
