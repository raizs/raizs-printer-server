/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('mailAlias', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		aliasName: {
			type: DataTypes.STRING,
			allowNull: true,
			unique: true,
			field: 'alias_name'
		},
		aliasModelId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'ir_model',
				key: 'id'
			},
			field: 'alias_model_id'
		},
		aliasUserId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_users',
				key: 'id'
			},
			field: 'alias_user_id'
		},
		aliasDefaults: {
			type: DataTypes.TEXT,
			allowNull: false,
			field: 'alias_defaults'
		},
		aliasForceThreadId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'alias_force_thread_id'
		},
		aliasParentModelId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'ir_model',
				key: 'id'
			},
			field: 'alias_parent_model_id'
		},
		aliasParentThreadId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'alias_parent_thread_id'
		},
		aliasContact: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'alias_contact'
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
		tableName: 'mail_alias',
		timestamps: false
	});
};
