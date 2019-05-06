/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountFinancialReport', {
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
		parentId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_financial_report',
				key: 'id'
			},
			field: 'parent_id'
		},
		sequence: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'sequence'
		},
		level: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'level'
		},
		type: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'type'
		},
		accountReportId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_financial_report',
				key: 'id'
			},
			field: 'account_report_id'
		},
		sign: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'sign'
		},
		displayDetail: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'display_detail'
		},
		styleOverwrite: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'style_overwrite'
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
		tableName: 'account_financial_report',
		timestamps: false
	});
};
