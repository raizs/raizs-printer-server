/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountFiscalPositionBrAccountFiscalObservationRel', {
		accountFiscalPositionId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_fiscal_position',
				key: 'id'
			},
			unique: true,
			field: 'account_fiscal_position_id'
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
		tableName: 'account_fiscal_position_br_account_fiscal_observation_rel',
		timestamps: false
	});
};
