/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('reportPaperformat', {
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
		default: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'default'
		},
		format: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'format'
		},
		marginTop: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'margin_top'
		},
		marginBottom: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'margin_bottom'
		},
		marginLeft: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'margin_left'
		},
		marginRight: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'margin_right'
		},
		pageHeight: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'page_height'
		},
		pageWidth: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'page_width'
		},
		orientation: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'orientation'
		},
		headerLine: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'header_line'
		},
		headerSpacing: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'header_spacing'
		},
		dpi: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'dpi'
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
		tableName: 'report_paperformat',
		timestamps: false
	});
};
