/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('saleGenerateReportWizard', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		fileType: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'file_type'
		},
		salesRange: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'sales_range'
		},
		date: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'date'
		},
		startDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'start_date'
		},
		endDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'end_date'
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
		tableName: 'sale_generate_report_wizard',
		timestamps: false
	});
};
