/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('mailMailStatistics', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		mailMailId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'mail_mail',
				key: 'id'
			},
			field: 'mail_mail_id'
		},
		mailMailIdInt: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'mail_mail_id_int'
		},
		messageId: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'message_id'
		},
		model: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'model'
		},
		resId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'res_id'
		},
		massMailingId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'mail_mass_mailing',
				key: 'id'
			},
			field: 'mass_mailing_id'
		},
		massMailingCampaignId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'mail_mass_mailing_campaign',
				key: 'id'
			},
			field: 'mass_mailing_campaign_id'
		},
		scheduled: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'scheduled'
		},
		sent: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'sent'
		},
		exception: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'exception'
		},
		opened: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'opened'
		},
		replied: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'replied'
		},
		bounced: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'bounced'
		},
		clicked: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'clicked'
		},
		state: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'state'
		},
		stateUpdate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'state_update'
		},
		createUid: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_users',
				key: 'id'
			},
			field: 'create_uid'
		},
		createDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'create_date'
		},
		writeUid: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_users',
				key: 'id'
			},
			field: 'write_uid'
		},
		writeDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'write_date'
		},
		marketingTraceId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'marketing_trace',
				key: 'id'
			},
			field: 'marketing_trace_id'
		}
	}, {
		tableName: 'mail_mail_statistics',
		timestamps: false
	});
};
