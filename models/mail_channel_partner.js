/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('mailChannelPartner', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		partnerId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_partner',
				key: 'id'
			},
			field: 'partner_id'
		},
		channelId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'mail_channel',
				key: 'id'
			},
			field: 'channel_id'
		},
		seenMessageId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'mail_message',
				key: 'id'
			},
			field: 'seen_message_id'
		},
		foldState: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'fold_state'
		},
		isMinimized: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'is_minimized'
		},
		isPinned: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'is_pinned'
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
		tableName: 'mail_channel_partner',
		timestamps: false
	});
};
