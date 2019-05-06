/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('mailComposeMessageResPartnerRel', {
		wizardId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'mail_compose_message',
				key: 'id'
			},
			unique: true,
			field: 'wizard_id'
		},
		partnerId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'res_partner',
				key: 'id'
			},
			field: 'partner_id'
		}
	}, {
		tableName: 'mail_compose_message_res_partner_rel',
		timestamps: false
	});
};
