/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('irActReportXml', {
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
		type: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'type'
		},
		help: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'help'
		},
		bindingModelId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'ir_model',
				key: 'id'
			},
			field: 'binding_model_id'
		},
		bindingType: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'binding_type'
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
		model: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'model'
		},
		reportType: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'report_type'
		},
		reportName: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'report_name'
		},
		reportFile: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'report_file'
		},
		multi: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'multi'
		},
		paperformatId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'report_paperformat',
				key: 'id'
			},
			field: 'paperformat_id'
		},
		printReportName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'print_report_name'
		},
		attachmentUse: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'attachment_use'
		},
		attachment: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'attachment'
		}
	}, {
		tableName: 'ir_act_report_xml',
		timestamps: false
	});
};
