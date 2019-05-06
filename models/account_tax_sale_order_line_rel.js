/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountTaxSaleOrderLineRel', {
		saleOrderLineId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'sale_order_line',
				key: 'id'
			},
			unique: true,
			field: 'sale_order_line_id'
		},
		accountTaxId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_tax',
				key: 'id'
			},
			field: 'account_tax_id'
		}
	}, {
		tableName: 'account_tax_sale_order_line_rel',
		timestamps: false
	});
};
