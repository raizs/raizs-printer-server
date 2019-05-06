/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('productTaxesRel', {
		prodId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'product_template',
				key: 'id'
			},
			unique: true,
			field: 'prod_id'
		},
		taxId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_tax',
				key: 'id'
			},
			field: 'tax_id'
		}
	}, {
		tableName: 'product_taxes_rel',
		timestamps: false
	});
};
