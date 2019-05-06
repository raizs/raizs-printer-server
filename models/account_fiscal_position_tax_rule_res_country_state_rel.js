/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountFiscalPositionTaxRuleResCountryStateRel', {
		accountFiscalPositionTaxRuleId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_fiscal_position_tax_rule',
				key: 'id'
			},
			unique: true,
			field: 'account_fiscal_position_tax_rule_id'
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
		tableName: 'account_fiscal_position_tax_rule_res_country_state_rel',
		timestamps: false
	});
};
