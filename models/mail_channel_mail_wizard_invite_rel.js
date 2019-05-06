/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('mailChannelMailWizardInviteRel', {
		mailWizardInviteId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'mail_wizard_invite',
				key: 'id'
			},
			unique: true,
			field: 'mail_wizard_invite_id'
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
		tableName: 'mail_channel_mail_wizard_invite_rel',
		timestamps: false
	});
};
