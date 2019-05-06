/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountFiscalPositionTaxRuleProdFiscalClasRelation', {
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
		productFiscalClassificationId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'product_fiscal_classification',
				key: 'id'
			},
			field: 'product_fiscal_classification_id'
		}
	}, {
		tableName: 'account_fiscal_position_tax_rule_prod_fiscal_clas_relation',
		timestamps: false
	});
};
