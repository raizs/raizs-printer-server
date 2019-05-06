/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('mailMessageMailChannelRel', {
		mailMessageId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'mail_message',
				key: 'id'
			},
			unique: true,
			field: 'mail_message_id'
		},
		mailChannelId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'mail_channel',
				key: 'id'
			},
			field: 'mail_channel_id'
		}
	}, {
		tableName: 'mail_message_mail_channel_rel',
		timestamps: false
	});
};
