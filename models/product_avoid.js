/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('productAvoid', {
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
		avoidId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'product_product',
				key: 'id'
			},
			field: 'avoid_id'
		}
	}, {
		tableName: 'product_avoid',
		timestamps: false
	});
};
