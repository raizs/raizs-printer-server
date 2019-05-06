/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('mailMailResPartnerRel', {
		mailMailId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'mail_mail',
				key: 'id'
			},
			unique: true,
			field: 'mail_mail_id'
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
		tableName: 'mail_mail_res_partner_rel',
		timestamps: false
	});
};
