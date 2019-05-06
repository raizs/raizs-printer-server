/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('mailMessageResPartnerNeedactionRel', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		mailMessageId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'mail_message',
				key: 'id'
			},
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
		},
		isRead: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'is_read'
		},
		isEmail: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'is_email'
		},
		emailStatus: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'email_status'
		}
	}, {
		tableName: 'mail_message_res_partner_needaction_rel',
		timestamps: false
	});
};
