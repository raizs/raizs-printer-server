/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('marketingTrace', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		participantId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'marketing_participant',
				key: 'id'
			},
			field: 'participant_id'
		},
		resId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'res_id'
		},
		activityId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'marketing_activity',
				key: 'id'
			},
			field: 'activity_id'
		},
		state: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'state'
		},
		scheduleDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'schedule_date'
		},
		stateMsg: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'state_msg'
		},
		parentId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'marketing_trace',
				key: 'id'
			},
			field: 'parent_id'
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
		tableName: 'marketing_trace',
		timestamps: false
	});
};
