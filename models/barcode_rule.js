/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('barcodeRule', {
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
		barcodeNomenclatureId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'barcode_nomenclature',
				key: 'id'
			},
			field: 'barcode_nomenclature_id'
		},
		sequence: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'sequence'
		},
		encoding: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'encoding'
		},
		type: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'type'
		},
		pattern: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'pattern'
		},
		alias: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'alias'
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
		tableName: 'barcode_rule',
		timestamps: false
	});
};
