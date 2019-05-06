/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('brAccountImportDeclarationLine', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		importDeclarationId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'br_account_import_declaration',
				key: 'id'
			},
			field: 'import_declaration_id'
		},
		sequence: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'sequence'
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'name'
		},
		manufacturerCode: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'manufacturer_code'
		},
		amountDiscount: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'amount_discount'
		},
		drawbackNumber: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'drawback_number'
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
		tableName: 'br_account_import_declaration_line',
		timestamps: false
	});
};
