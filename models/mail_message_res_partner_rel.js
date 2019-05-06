/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('mailMessageResPartnerRel', {
		mailMessageId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'mail_message',
				key: 'id'
			},
			unique: true,
			field: 'mail_message_id'
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
		tableName: 'mail_message_res_partner_rel',
		timestamps: false
	});
};
