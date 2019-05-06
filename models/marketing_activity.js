/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('marketingActivity', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		utmSourceId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'utm_source',
				key: 'id'
			},
			field: 'utm_source_id'
		},
		campaignId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'marketing_campaign',
				key: 'id'
			},
			field: 'campaign_id'
		},
		intervalNumber: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'interval_number'
		},
		intervalType: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'interval_type'
		},
		intervalStandardized: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'interval_standardized'
		},
		validityDuration: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'validity_duration'
		},
		validityDurationNumber: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'validity_duration_number'
		},
		validityDurationType: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'validity_duration_type'
		},
		requireSync: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'require_sync'
		},
		domain: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'domain'
		},
		activityType: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'activity_type'
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
		serverActionId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'ir_act_server',
				key: 'id'
			},
			field: 'server_action_id'
		},
		parentId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'marketing_activity',
				key: 'id'
			},
			field: 'parent_id'
		},
		triggerType: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'trigger_type'
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
		}
	}, {
		tableName: 'marketing_activity',
		timestamps: false
	});
};
