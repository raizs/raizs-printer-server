/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('hrJob', {
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
			unique: true,
			field: 'name'
		},
		expectedEmployees: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'expected_employees'
		},
		noOfEmployee: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'no_of_employee'
		},
		noOfRecruitment: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'no_of_recruitment'
		},
		noOfHiredEmployee: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'no_of_hired_employee'
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'description'
		},
		requirements: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'requirements'
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
		companyId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_company',
				key: 'id'
			},
			field: 'company_id'
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
		tableName: 'hr_job',
		timestamps: false
	});
};
