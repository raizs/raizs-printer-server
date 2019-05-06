/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('irUiView', {
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
		model: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'model'
		},
		key: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'key'
		},
		priority: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'priority'
		},
		type: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'type'
		},
		archDb: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'arch_db'
		},
		archFs: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'arch_fs'
		},
		inheritId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'ir_ui_view',
				key: 'id'
			},
			field: 'inherit_id'
		},
		fieldParent: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'field_parent'
		},
		createDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'create_date'
		},
		writeDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'write_date'
		},
		mode: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'mode'
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
		writeUid: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_users',
				key: 'id'
			},
			field: 'write_uid'
		}
	}, {
		tableName: 'ir_ui_view',
		timestamps: false
	});
};
