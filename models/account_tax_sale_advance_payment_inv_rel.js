/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountTaxSaleAdvancePaymentInvRel', {
		saleAdvancePaymentInvId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'sale_advance_payment_inv',
				key: 'id'
			},
			unique: true,
			field: 'sale_advance_payment_inv_id'
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
		tableName: 'account_tax_sale_advance_payment_inv_rel',
		timestamps: false
	});
};
