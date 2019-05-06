/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountAccountTaxDefaultRel', {
		accountId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_account',
				key: 'id'
			},
			unique: true,
			field: 'account_id'
		},
		taxId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_tax',
				key: 'id'
			},
			field: 'tax_id'
		}
	}, {
		tableName: 'account_account_tax_default_rel',
		timestamps: false
	});
};
