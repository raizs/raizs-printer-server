/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('mrpWorkcenterProductivity', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			field: 'id'
		},
		workcenterId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'mrp_workcenter',
				key: 'id'
			},
			field: 'workcenter_id'
		},
		workorderId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'mrp_workorder',
				key: 'id'
			},
			field: 'workorder_id'
		},
		userId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_users',
				key: 'id'
			},
			field: 'user_id'
		},
		lossId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'mrp_workcenter_productivity_loss',
				key: 'id'
			},
			field: 'loss_id'
		},
		lossType: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'loss_type'
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'description'
		},
		dateStart: {
			type: DataTypes.DATE,
			allowNull: false,
			field: 'date_start'
		},
		dateEnd: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'date_end'
		},
		duration: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'duration'
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
		costAlreadyRecorded: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'cost_already_recorded'
		}
	}, {
		tableName: 'mrp_workcenter_productivity',
		timestamps: false
	});
};
