/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountAccountTagAccountTaxTemplateRel', {
		accountTaxTemplateId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_tax_template',
				key: 'id'
			},
			unique: true,
			field: 'account_tax_template_id'
		},
		accountAccountTagId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_account_tag',
				key: 'id'
			},
			field: 'account_account_tag_id'
		}
	}, {
		tableName: 'account_account_tag_account_tax_template_rel',
		timestamps: false
	});
};
