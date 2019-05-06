/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('irActWindowGroupRel', {
		actId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'ir_act_window',
				key: 'id'
			},
			unique: true,
			field: 'act_id'
		},
		gid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'res_groups',
				key: 'id'
			},
			field: 'gid'
		}
	}, {
		tableName: 'ir_act_window_group_rel',
		timestamps: false
	});
};
