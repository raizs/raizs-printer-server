/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('resourceCalendarAttendance', {
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
		dayofweek: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'dayofweek'
		},
		dateFrom: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'date_from'
		},
		dateTo: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'date_to'
		},
		hourFrom: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'hour_from'
		},
		hourTo: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'hour_to'
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
		tableName: 'resource_calendar_attendance',
		timestamps: false
	});
};
