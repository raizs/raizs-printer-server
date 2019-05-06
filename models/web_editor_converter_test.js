/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('webEditorConverterTest', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		char: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'char'
		},
		integer: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'integer'
		},
		float: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'float'
		},
		numeric: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'numeric'
		},
		many2One: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'web_editor_converter_test_sub',
				key: 'id'
			},
			field: 'many2one'
		},
		binary: {
			type: "BYTEA",
			allowNull: true,
			field: 'binary'
		},
		date: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'date'
		},
		datetime: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'datetime'
		},
		selection: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'selection'
		},
		selectionStr: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'selection_str'
		},
		html: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'html'
		},
		text: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'text'
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
		tableName: 'web_editor_converter_test',
		timestamps: false
	});
};
