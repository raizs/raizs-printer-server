/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountFiscalPositionTemplateResCountryStateRel', {
		accountFiscalPositionTemplateId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_fiscal_position_template',
				key: 'id'
			},
			unique: true,
			field: 'account_fiscal_position_template_id'
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
		tableName: 'account_fiscal_position_template_res_country_state_rel',
		timestamps: false
	});
};
