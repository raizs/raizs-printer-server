/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('productAttributeLineProductAttributeValueRel', {
		productAttributeLineId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'product_attribute_line',
				key: 'id'
			},
			unique: true,
			field: 'product_attribute_line_id'
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
		tableName: 'product_attribute_line_product_attribute_value_rel',
		timestamps: false
	});
};
