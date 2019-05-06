/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountFiscalPositionTaxRuleBrAccountFiscalCategoryRel', {
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
		brAccountFiscalCategoryId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'br_account_fiscal_category',
				key: 'id'
			},
			field: 'br_account_fiscal_category_id'
		}
	}, {
		tableName: 'account_fiscal_position_tax_rule_br_account_fiscal_category_rel',
		timestamps: false
	});
};
