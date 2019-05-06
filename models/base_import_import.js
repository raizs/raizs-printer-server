/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('baseImportImport', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		resModel: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'res_model'
		},
		file: {
			type: "BYTEA",
			allowNull: true,
			field: 'file'
		},
		fileName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'file_name'
		},
		fileType: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'file_type'
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
		tableName: 'base_import_import',
		timestamps: false
	});
};
