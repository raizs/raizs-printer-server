/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountTaxFiliationRel', {
		parentTax: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_tax',
				key: 'id'
			},
			unique: true,
			field: 'parent_tax'
		},
		childTax: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_tax',
				key: 'id'
			},
			field: 'child_tax'
		}
	}, {
		tableName: 'account_tax_filiation_rel',
		timestamps: false
	});
};
