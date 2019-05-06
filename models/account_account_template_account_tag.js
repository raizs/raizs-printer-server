/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountAccountTemplateAccountTag', {
		accountAccountTemplateId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_account_template',
				key: 'id'
			},
			unique: true,
			field: 'account_account_template_id'
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
		tableName: 'account_account_template_account_tag',
		timestamps: false
	});
};
