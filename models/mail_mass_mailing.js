/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('mailMassMailing', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		active: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'active'
		},
		emailFrom: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'email_from'
		},
		createDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'create_date'
		},
		sentDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'sent_date'
		},
		scheduleDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'schedule_date'
		},
		bodyHtml: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'body_html'
		},
		keepArchives: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'keep_archives'
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
		campaignId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'utm_campaign',
				key: 'id'
			},
			field: 'campaign_id'
		},
		sourceId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'utm_source',
				key: 'id'
			},
			field: 'source_id'
		},
		mediumId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'utm_medium',
				key: 'id'
			},
			field: 'medium_id'
		},
		state: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'state'
		},
		color: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'color'
		},
		replyToMode: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'reply_to_mode'
		},
		replyTo: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'reply_to'
		},
		mailingModelId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'ir_model',
				key: 'id'
			},
			field: 'mailing_model_id'
		},
		mailingDomain: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'mailing_domain'
		},
		contactAbPc: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'contact_ab_pc'
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
		useInMarketingAutomation: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'use_in_marketing_automation'
		}
	}, {
		tableName: 'mail_mass_mailing',
		timestamps: false
	});
};
