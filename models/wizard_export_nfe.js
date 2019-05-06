/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wizardExportNfe', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		startDate: {
			type: DataTypes.DATEONLY,
			allowNull: false,
			field: 'start_date'
		},
		endDate: {
			type: DataTypes.DATEONLY,
			allowNull: false,
			field: 'end_date'
		},
		model: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'br_account_fiscal_document',
				key: 'id'
			},
			field: 'model'
		},
		zipFile: {
			type: "BYTEA",
			allowNull: true,
			field: 'zip_file'
		},
		zipFileName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'zip_file_name'
		},
		state: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'state'
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
		tableName: 'wizard_export_nfe',
		timestamps: false
	});
};
