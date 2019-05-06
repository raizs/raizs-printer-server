/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('paymentCountryRel', {
		paymentId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'payment_acquirer',
				key: 'id'
			},
			unique: true,
			field: 'payment_id'
		},
		countryId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'res_country',
				key: 'id'
			},
			field: 'country_id'
		}
	}, {
		tableName: 'payment_country_rel',
		timestamps: false
	});
};
