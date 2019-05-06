/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('webPlanner', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'name'
		},
		menuId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'ir_ui_menu',
				key: 'id'
			},
			field: 'menu_id'
		},
		viewId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'ir_ui_view',
				key: 'id'
			},
			field: 'view_id'
		},
		tooltipPlanner: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'tooltip_planner'
		},
		plannerApplication: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'planner_application'
		},
		active: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'active'
		},
		createUid: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_users',
				key: 'id'
			},
			field: 'create_uid'
		},
		createDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'create_date'
		},
		writeUid: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_users',
				key: 'id'
			},
			field: 'write_uid'
		},
		writeDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'write_date'
		}
	}, {
		tableName: 'web_planner',
		timestamps: false
	});
};
