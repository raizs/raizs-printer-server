/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('resourceResource', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'name'
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
		resourceType: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'resource_type'
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
		timeEfficiency: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'time_efficiency'
		},
		calendarId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'resource_calendar',
				key: 'id'
			},
			field: 'calendar_id'
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
		tableName: 'resource_resource',
		timestamps: false
	});
};
