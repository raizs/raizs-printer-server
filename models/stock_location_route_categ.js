/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('stockLocationRouteCateg', {
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
		categId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'product_category',
				key: 'id'
			},
			field: 'categ_id'
		}
	}, {
		tableName: 'stock_location_route_categ',
		timestamps: false
	});
};
