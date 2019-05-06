/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('baseImportTestsModelsPreview', {
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
		somevalue: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'somevalue'
		},
		othervalue: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'othervalue'
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
		tableName: 'base_import_tests_models_preview',
		timestamps: false
	});
};
