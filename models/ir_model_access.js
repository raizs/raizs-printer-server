/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('irModelAccess', {
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
		active: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'active'
		},
		modelId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'ir_model',
				key: 'id'
			},
			field: 'model_id'
		},
		groupId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_groups',
				key: 'id'
			},
			field: 'group_id'
		},
		permRead: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'perm_read'
		},
		permWrite: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'perm_write'
		},
		permCreate: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'perm_create'
		},
		permUnlink: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'perm_unlink'
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
		tableName: 'ir_model_access',
		timestamps: false
	});
};
