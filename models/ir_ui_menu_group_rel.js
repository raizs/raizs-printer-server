/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('irUiMenuGroupRel', {
		menuId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'ir_ui_menu',
				key: 'id'
			},
			unique: true,
			field: 'menu_id'
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
		tableName: 'ir_ui_menu_group_rel',
		timestamps: false
	});
};
