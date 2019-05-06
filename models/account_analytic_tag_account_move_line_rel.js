/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountAnalyticTagAccountMoveLineRel', {
		accountMoveLineId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_move_line',
				key: 'id'
			},
			unique: true,
			field: 'account_move_line_id'
		},
		accountAnalyticTagId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_analytic_tag',
				key: 'id'
			},
			field: 'account_analytic_tag_id'
		}
	}, {
		tableName: 'account_analytic_tag_account_move_line_rel',
		timestamps: false
	});
};
