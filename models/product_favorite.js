/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('productFavorite', {
		productId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'res_partner',
				key: 'id'
			},
			unique: true,
			field: 'product_id'
		},
		favoriteId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'product_product',
				key: 'id'
			},
			field: 'favorite_id'
		}
	}, {
		tableName: 'product_favorite',
		timestamps: false
	});
};
