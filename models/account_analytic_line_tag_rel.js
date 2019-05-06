/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountAnalyticLineTagRel', {
		lineId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_analytic_line',
				key: 'id'
			},
			unique: true,
			field: 'line_id'
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
		tableName: 'account_analytic_line_tag_rel',
		timestamps: false
	});
};
