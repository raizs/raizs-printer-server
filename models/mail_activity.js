/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('mailActivity', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		resId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'res_id'
		},
		resModelId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'ir_model',
				key: 'id'
			},
			field: 'res_model_id'
		},
		resModel: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'res_model'
		},
		resName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'res_name'
		},
		activityTypeId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'mail_activity_type',
				key: 'id'
			},
			field: 'activity_type_id'
		},
		summary: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'summary'
		},
		note: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'note'
		},
		feedback: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'feedback'
		},
		dateDeadline: {
			type: DataTypes.DATEONLY,
			allowNull: false,
			field: 'date_deadline'
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
		recommendedActivityTypeId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'mail_activity_type',
				key: 'id'
			},
			field: 'recommended_activity_type_id'
		},
		previousActivityTypeId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'mail_activity_type',
				key: 'id'
			},
			field: 'previous_activity_type_id'
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
		tableName: 'mail_activity',
		timestamps: false
	});
};
