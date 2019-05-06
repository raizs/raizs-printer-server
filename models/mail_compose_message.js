/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('mailComposeMessage', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		compositionMode: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'composition_mode'
		},
		useActiveDomain: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'use_active_domain'
		},
		activeDomain: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'active_domain'
		},
		isLog: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'is_log'
		},
		subject: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'subject'
		},
		notify: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'notify'
		},
		autoDelete: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'auto_delete'
		},
		autoDeleteMessage: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'auto_delete_message'
		},
		templateId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'mail_template',
				key: 'id'
			},
			field: 'template_id'
		},
		messageType: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'message_type'
		},
		subtypeId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'mail_message_subtype',
				key: 'id'
			},
			field: 'subtype_id'
		},
		date: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'date'
		},
		body: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'body'
		},
		parentId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'mail_message',
				key: 'id'
			},
			field: 'parent_id'
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
		recordName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'record_name'
		},
		mailActivityTypeId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'mail_activity_type',
				key: 'id'
			},
			field: 'mail_activity_type_id'
		},
		emailFrom: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'email_from'
		},
		authorId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_partner',
				key: 'id'
			},
			field: 'author_id'
		},
		noAutoThread: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'no_auto_thread'
		},
		messageId: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'message_id'
		},
		replyTo: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'reply_to'
		},
		mailServerId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'ir_mail_server',
				key: 'id'
			},
			field: 'mail_server_id'
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
		massMailingCampaignId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'mail_mass_mailing_campaign',
				key: 'id'
			},
			field: 'mass_mailing_campaign_id'
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
		massMailingName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'mass_mailing_name'
		},
		marketingActivityId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'marketing_activity',
				key: 'id'
			},
			field: 'marketing_activity_id'
		},
		ratingValue: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'rating_value'
		}
	}, {
		tableName: 'mail_compose_message',
		timestamps: false
	});
};
