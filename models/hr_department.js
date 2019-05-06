/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('hrDepartment', {
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
		completeName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'complete_name'
		},
		active: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'active'
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
		parentId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'hr_department',
				key: 'id'
			},
			field: 'parent_id'
		},
		managerId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'hr_employee',
				key: 'id'
			},
			field: 'manager_id'
		},
		note: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'note'
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
		}
	}, {
		tableName: 'hr_department',
		timestamps: false
	});
};
