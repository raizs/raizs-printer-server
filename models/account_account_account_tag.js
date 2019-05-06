/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountAccountAccountTag', {
		accountAccountId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_account',
				key: 'id'
			},
			unique: true,
			field: 'account_account_id'
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
		tableName: 'account_account_account_tag',
		timestamps: false
	});
};
