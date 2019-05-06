/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountReportFootnote', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		text: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'text'
		},
		line: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'line'
		},
		managerId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_report_manager',
				key: 'id'
			},
			field: 'manager_id'
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
		tableName: 'account_report_footnote',
		timestamps: false
	});
};
