/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('linkTrackerClick', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		clickDate: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'click_date'
		},
		linkId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'link_tracker',
				key: 'id'
			},
			field: 'link_id'
		},
		ip: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'ip'
		},
		countryId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_country',
				key: 'id'
			},
			field: 'country_id'
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
		mailStatId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'mail_mail_statistics',
				key: 'id'
			},
			field: 'mail_stat_id'
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
		tableName: 'link_tracker_click',
		timestamps: false
	});
};
