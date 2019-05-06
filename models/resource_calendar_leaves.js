/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('resourceCalendarLeaves', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		name: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'name'
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
		calendarId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'resource_calendar',
				key: 'id'
			},
			field: 'calendar_id'
		},
		dateFrom: {
			type: DataTypes.DATE,
			allowNull: false,
			field: 'date_from'
		},
		dateTo: {
			type: DataTypes.DATE,
			allowNull: false,
			field: 'date_to'
		},
		tz: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'tz'
		},
		resourceId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'resource_resource',
				key: 'id'
			},
			field: 'resource_id'
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
		tableName: 'resource_calendar_leaves',
		timestamps: false
	});
};
