/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('marketingCampaign', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		utmCampaignId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'utm_campaign',
				key: 'id'
			},
			field: 'utm_campaign_id'
		},
		active: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'active'
		},
		state: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'state'
		},
		modelId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'ir_model',
				key: 'id'
			},
			field: 'model_id'
		},
		modelName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'model_name'
		},
		uniqueFieldId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'ir_model_fields',
				key: 'id'
			},
			field: 'unique_field_id'
		},
		domain: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'domain'
		},
		lastSyncDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'last_sync_date'
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
		tableName: 'marketing_campaign',
		timestamps: false
	});
};
