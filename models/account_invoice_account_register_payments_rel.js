/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountInvoiceAccountRegisterPaymentsRel', {
		accountRegisterPaymentsId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_register_payments',
				key: 'id'
			},
			unique: true,
			field: 'account_register_payments_id'
		},
		accountInvoiceId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_invoice',
				key: 'id'
			},
			field: 'account_invoice_id'
		}
	}, {
		tableName: 'account_invoice_account_register_payments_rel',
		timestamps: false
	});
};
