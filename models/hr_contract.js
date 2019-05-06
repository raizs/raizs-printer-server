/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('hrContract', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		messageLastPost: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'message_last_post'
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'name'
		},
		employeeId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'hr_employee',
				key: 'id'
			},
			field: 'employee_id'
		},
		departmentId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'hr_department',
				key: 'id'
			},
			field: 'department_id'
		},
		typeId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'hr_contract_type',
				key: 'id'
			},
			field: 'type_id'
		},
		jobId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'hr_job',
				key: 'id'
			},
			field: 'job_id'
		},
		dateStart: {
			type: DataTypes.DATEONLY,
			allowNull: false,
			field: 'date_start'
		},
		dateEnd: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'date_end'
		},
		trialDateEnd: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'trial_date_end'
		},
		resourceCalendarId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'resource_calendar',
				key: 'id'
			},
			field: 'resource_calendar_id'
		},
		wage: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'wage'
		},
		advantages: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'advantages'
		},
		notes: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'notes'
		},
		state: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'state'
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
		}
	}, {
		tableName: 'hr_contract',
		timestamps: false
	});
};
