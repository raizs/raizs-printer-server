/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountFiscalPositionTaxResCountryStateRel', {
		accountFiscalPositionTaxId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_fiscal_position_tax',
				key: 'id'
			},
			unique: true,
			field: 'account_fiscal_position_tax_id'
		},
		resCountryStateId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'res_country_state',
				key: 'id'
			},
			field: 'res_country_state_id'
		}
	}, {
		tableName: 'account_fiscal_position_tax_res_country_state_rel',
		timestamps: false
	});
};
