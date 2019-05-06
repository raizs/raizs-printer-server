/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('stockRouteProduct', {
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
		productId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'product_template',
				key: 'id'
			},
			field: 'product_id'
		}
	}, {
		tableName: 'stock_route_product',
		timestamps: false
	});
};
