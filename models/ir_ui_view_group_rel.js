/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('irUiViewGroupRel', {
		viewId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'ir_ui_view',
				key: 'id'
			},
			unique: true,
			field: 'view_id'
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
		tableName: 'ir_ui_view_group_rel',
		timestamps: false
	});
};
