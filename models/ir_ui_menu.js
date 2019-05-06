/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('irUiMenu', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		parentLeft: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'parent_left'
		},
		parentRight: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'parent_right'
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'name'
		},
		active: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'active'
		},
		sequence: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'sequence'
		},
		parentId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'ir_ui_menu',
				key: 'id'
			},
			field: 'parent_id'
		},
		webIcon: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'web_icon'
		},
		action: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'action'
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
		tableName: 'ir_ui_menu',
		timestamps: false
	});
};
