/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('irActServerMailChannelRel', {
		irActServerId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'ir_act_server',
				key: 'id'
			},
			unique: true,
			field: 'ir_act_server_id'
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
		tableName: 'ir_act_server_mail_channel_rel',
		timestamps: false
	});
};
