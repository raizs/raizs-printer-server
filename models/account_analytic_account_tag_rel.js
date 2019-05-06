/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountAnalyticAccountTagRel', {
		accountId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_analytic_account',
				key: 'id'
			},
			unique: true,
			field: 'account_id'
		},
		tagId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_analytic_tag',
				key: 'id'
			},
			field: 'tag_id'
		}
	}, {
		tableName: 'account_analytic_account_tag_rel',
		timestamps: false
	});
};
