/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ruleGroupRel', {
		ruleGroupId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'ir_rule',
				key: 'id'
			},
			unique: true,
			field: 'rule_group_id'
		},
		groupId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'res_groups',
				key: 'id'
			},
			field: 'group_id'
		}
	}, {
		tableName: 'rule_group_rel',
		timestamps: false
	});
};
