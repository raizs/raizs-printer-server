/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('mailMassMailingTagRel', {
		tagId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'mail_mass_mailing_campaign',
				key: 'id'
			},
			unique: true,
			field: 'tag_id'
		},
		campaignId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'mail_mass_mailing_tag',
				key: 'id'
			},
			field: 'campaign_id'
		}
	}, {
		tableName: 'mail_mass_mailing_tag_rel',
		timestamps: false
	});
};
