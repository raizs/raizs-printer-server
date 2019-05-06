/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountAccountTemplateTaxRel', {
		accountId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_account_template',
				key: 'id'
			},
			unique: true,
			field: 'account_id'
		},
		taxId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_tax_template',
				key: 'id'
			},
			field: 'tax_id'
		}
	}, {
		tableName: 'account_account_template_tax_rel',
		timestamps: false
	});
};
