/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('mailMassMailingContactListRel', {
		contactId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'mail_mass_mailing_contact',
				key: 'id'
			},
			unique: true,
			field: 'contact_id'
		},
		listId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'mail_mass_mailing_list',
				key: 'id'
			},
			field: 'list_id'
		}
	}, {
		tableName: 'mail_mass_mailing_contact_list_rel',
		timestamps: false
	});
};
