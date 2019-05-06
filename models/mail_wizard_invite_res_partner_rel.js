/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('mailWizardInviteResPartnerRel', {
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
		resPartnerId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'res_partner',
				key: 'id'
			},
			field: 'res_partner_id'
		}
	}, {
		tableName: 'mail_wizard_invite_res_partner_rel',
		timestamps: false
	});
};
