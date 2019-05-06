/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('mailMassMailingListRel', {
		mailMassMailingId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'mail_mass_mailing',
				key: 'id'
			},
			unique: true,
			field: 'mail_mass_mailing_id'
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
		tableName: 'mail_mass_mailing_list_rel',
		timestamps: false
	});
};
