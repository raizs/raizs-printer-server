/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('linkTracker', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
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
		url: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'url'
		},
		count: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'count'
		},
		title: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'title'
		},
		favicon: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'favicon'
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
		}
	}, {
		tableName: 'link_tracker',
		timestamps: false
	});
};
