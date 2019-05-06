/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountTaxAccountTag', {
		accountTaxId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_tax',
				key: 'id'
			},
			unique: true,
			field: 'account_tax_id'
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
		tableName: 'account_tax_account_tag',
		timestamps: false
	});
};
