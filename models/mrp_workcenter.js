/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('mrpWorkcenter', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			field: 'id'
		},
		resourceId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'resource_resource',
				key: 'id'
			},
			field: 'resource_id'
		},
		name: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'name'
		},
		timeEfficiency: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'time_efficiency'
		},
		active: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'active'
		},
		code: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'code'
		},
		note: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'note'
		},
		capacity: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'capacity'
		},
		sequence: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'sequence'
		},
		color: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'color'
		},
		timeStart: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'time_start'
		},
		timeStop: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'time_stop'
		},
		workingState: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'working_state'
		},
		oeeTarget: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'oee_target'
		},
		companyId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_company',
				key: 'id'
			},
			field: 'company_id'
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
		costsHour: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'costs_hour'
		},
		costsHourAccountId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_analytic_account',
				key: 'id'
			},
			field: 'costs_hour_account_id'
		}
	}, {
		tableName: 'mrp_workcenter',
		timestamps: false
	});
};
