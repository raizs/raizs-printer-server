/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('stockRouteWarehouse', {
		routeId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'stock_location_route',
				key: 'id'
			},
			unique: true,
			field: 'route_id'
		},
		warehouseId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'stock_warehouse',
				key: 'id'
			},
			field: 'warehouse_id'
		}
	}, {
		tableName: 'stock_route_warehouse',
		timestamps: false
	});
};
