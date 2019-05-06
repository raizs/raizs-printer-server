/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('fetchmailServer', {
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
		state: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'state'
		},
		server: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'server'
		},
		port: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'port'
		},
		type: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'type'
		},
		isSsl: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'is_ssl'
		},
		attach: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'attach'
		},
		original: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'original'
		},
		date: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'date'
		},
		user: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'user'
		},
		password: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'password'
		},
		actionId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'ir_act_server',
				key: 'id'
			},
			field: 'action_id'
		},
		objectId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'ir_model',
				key: 'id'
			},
			field: 'object_id'
		},
		priority: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'priority'
		},
		configuration: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'configuration'
		},
		script: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'script'
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
		tableName: 'fetchmail_server',
		timestamps: false
	});
};
