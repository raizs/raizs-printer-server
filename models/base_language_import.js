/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('baseLanguageImport', {
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
		code: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'code'
		},
		data: {
			type: "BYTEA",
			allowNull: false,
			field: 'data'
		},
		filename: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'filename'
		},
		overwrite: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'overwrite'
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
		tableName: 'base_language_import',
		timestamps: false
	});
};
