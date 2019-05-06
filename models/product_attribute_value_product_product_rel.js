/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('productAttributeValueProductProductRel', {
		productProductId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'product_product',
				key: 'id'
			},
			unique: true,
			field: 'product_product_id'
		},
		productAttributeValueId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'product_attribute_value',
				key: 'id'
			},
			field: 'product_attribute_value_id'
		}
	}, {
		tableName: 'product_attribute_value_product_product_rel',
		timestamps: false
	});
};
