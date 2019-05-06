/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('stockLocationRouteMove', {
		moveId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'stock_move',
				key: 'id'
			},
			unique: true,
			field: 'move_id'
		},
		routeId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'stock_location_route',
				key: 'id'
			},
			field: 'route_id'
		}
	}, {
		tableName: 'stock_location_route_move',
		timestamps: false
	});
};
