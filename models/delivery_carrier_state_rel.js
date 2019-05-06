/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('deliveryCarrierStateRel', {
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
		stateId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'res_country_state',
				key: 'id'
			},
			field: 'state_id'
		}
	}, {
		tableName: 'delivery_carrier_state_rel',
		timestamps: false
	});
};
