/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('marketingParticipant', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
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
		modelId: {
			type: DataTypes.INTEGER,
			allowNull: true,
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
		resId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'res_id'
		},
		state: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'state'
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
		tableName: 'marketing_participant',
		timestamps: false
	});
};
