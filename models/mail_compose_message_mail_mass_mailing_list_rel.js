/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('mailComposeMessageMailMassMailingListRel', {
		mailComposeMessageId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'mail_compose_message',
				key: 'id'
			},
			unique: true,
			field: 'mail_compose_message_id'
		},
		mailMassMailingListId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'mail_mass_mailing_list',
				key: 'id'
			},
			field: 'mail_mass_mailing_list_id'
		}
	}, {
		tableName: 'mail_compose_message_mail_mass_mailing_list_rel',
		timestamps: false
	});
};
