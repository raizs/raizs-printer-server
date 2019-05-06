/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('mailMassMailingCampaign', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		stageId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'mail_mass_mailing_stage',
				key: 'id'
			},
			field: 'stage_id'
		},
		userId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'res_users',
				key: 'id'
			},
			field: 'user_id'
		},
		campaignId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'utm_campaign',
				key: 'id'
			},
			field: 'campaign_id'
		},
		sourceId: {
			type: DataTypes.INTEGER,
			allowNull: true,
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
		uniqueAbTesting: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'unique_ab_testing'
		},
		color: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'color'
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
		tableName: 'mail_mass_mailing_campaign',
		timestamps: false
	});
};
