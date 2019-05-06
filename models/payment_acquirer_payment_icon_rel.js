/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('paymentAcquirerPaymentIconRel', {
		paymentAcquirerId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'payment_acquirer',
				key: 'id'
			},
			unique: true,
			field: 'payment_acquirer_id'
		},
		paymentIconId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'payment_icon',
				key: 'id'
			},
			field: 'payment_icon_id'
		}
	}, {
		tableName: 'payment_acquirer_payment_icon_rel',
		timestamps: false
	});
};
