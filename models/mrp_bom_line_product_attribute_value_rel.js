/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('mrpBomLineProductAttributeValueRel', {
		mrpBomLineId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'mrp_bom_line',
				key: 'id'
			},
			unique: true,
			field: 'mrp_bom_line_id'
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
		tableName: 'mrp_bom_line_product_attribute_value_rel',
		timestamps: false
	});
};
