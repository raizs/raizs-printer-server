/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('mailChannel', {
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
		channelType: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'channel_type'
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'description'
		},
		uuid: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'uuid'
		},
		emailSend: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'email_send'
		},
		public: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'public'
		},
		groupPublicId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_groups',
				key: 'id'
			},
			field: 'group_public_id'
		},
		aliasId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'mail_alias',
				key: 'id'
			},
			field: 'alias_id'
		},
		messageLastPost: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'message_last_post'
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
		tableName: 'mail_channel',
		timestamps: false
	});
};
