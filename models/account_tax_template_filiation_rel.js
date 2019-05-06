/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountTaxTemplateFiliationRel', {
		parentTax: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_tax_template',
				key: 'id'
			},
			unique: true,
			field: 'parent_tax'
		},
		childTax: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_tax_template',
				key: 'id'
			},
			field: 'child_tax'
		}
	}, {
		tableName: 'account_tax_template_filiation_rel',
		timestamps: false
	});
};
