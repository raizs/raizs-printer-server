/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('brAccountFiscalObservationProductTemplateRel', {
		productTemplateId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'product_template',
				key: 'id'
			},
			unique: true,
			field: 'product_template_id'
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
		tableName: 'br_account_fiscal_observation_product_template_rel',
		timestamps: false
	});
};
