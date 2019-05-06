/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('mailMassMailingContactResPartnerCategoryRel', {
		mailMassMailingContactId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'mail_mass_mailing_contact',
				key: 'id'
			},
			unique: true,
			field: 'mail_mass_mailing_contact_id'
		},
		resPartnerCategoryId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'res_partner_category',
				key: 'id'
			},
			field: 'res_partner_category_id'
		}
	}, {
		tableName: 'mail_mass_mailing_contact_res_partner_category_rel',
		timestamps: false
	});
};
