/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('hrEmployee', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
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
		messageLastPost: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'message_last_post'
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
		name: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'name'
		},
		active: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'active'
		},
		addressHomeId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_partner',
				key: 'id'
			},
			field: 'address_home_id'
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
		gender: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'gender'
		},
		marital: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'marital'
		},
		birthday: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'birthday'
		},
		ssnid: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'ssnid'
		},
		sinid: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'sinid'
		},
		identificationId: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'identification_id'
		},
		passportId: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'passport_id'
		},
		bankAccountId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_partner_bank',
				key: 'id'
			},
			field: 'bank_account_id'
		},
		permitNo: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'permit_no'
		},
		visaNo: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'visa_no'
		},
		visaExpire: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'visa_expire'
		},
		addressId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_partner',
				key: 'id'
			},
			field: 'address_id'
		},
		workPhone: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'work_phone'
		},
		mobilePhone: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'mobile_phone'
		},
		workEmail: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'work_email'
		},
		workLocation: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'work_location'
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
		departmentId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'hr_department',
				key: 'id'
			},
			field: 'department_id'
		},
		parentId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'hr_employee',
				key: 'id'
			},
			field: 'parent_id'
		},
		coachId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'hr_employee',
				key: 'id'
			},
			field: 'coach_id'
		},
		notes: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'notes'
		},
		color: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'color'
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
		manager: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'manager'
		},
		medicExam: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'medic_exam'
		},
		placeOfBirth: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'place_of_birth'
		},
		children: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'children'
		},
		vehicle: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'vehicle'
		},
		vehicleDistance: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'vehicle_distance'
		}
	}, {
		tableName: 'hr_employee',
		timestamps: false
	});
};
