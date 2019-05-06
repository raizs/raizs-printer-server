/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountInvoicePaymentRel', {
		paymentId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_payment',
				key: 'id'
			},
			unique: true,
			field: 'payment_id'
		},
		invoiceId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_invoice',
				key: 'id'
			},
			field: 'invoice_id'
		}
	}, {
		tableName: 'account_invoice_payment_rel',
		timestamps: false
	});
};
