/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('brAccountFiscalObservationReservTestRel', {
		reservTestId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'reserv_test',
				key: 'id'
			},
			unique: true,
			field: 'reserv_test_id'
		},
		brAccountFiscalObservationId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'br_account_fiscal_observation',
				key: 'id'
			},
			field: 'br_account_fiscal_observation_id'
		}
	}, {
		tableName: 'br_account_fiscal_observation_reserv_test_rel',
		timestamps: false
	});
};
