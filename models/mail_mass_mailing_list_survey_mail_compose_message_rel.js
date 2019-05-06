/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('mailMassMailingListSurveyMailComposeMessageRel', {
		surveyMailComposeMessageId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'survey_mail_compose_message',
				key: 'id'
			},
			unique: true,
			field: 'survey_mail_compose_message_id'
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
		tableName: 'mail_mass_mailing_list_survey_mail_compose_message_rel',
		timestamps: false
	});
};
