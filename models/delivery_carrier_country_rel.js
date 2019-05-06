/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('deliveryCarrierCountryRel', {
		carrierId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'delivery_carrier',
				key: 'id'
			},
			unique: true,
			field: 'carrier_id'
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
		tableName: 'delivery_carrier_country_rel',
		timestamps: false
	});
};
