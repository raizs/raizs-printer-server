/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('brAccountImportDeclaration', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		invoiceLineId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_invoice_line',
				key: 'id'
			},
			field: 'invoice_line_id'
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'name'
		},
		dateRegistration: {
			type: DataTypes.DATEONLY,
			allowNull: false,
			field: 'date_registration'
		},
		stateId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'res_country_state',
				key: 'id'
			},
			field: 'state_id'
		},
		location: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'location'
		},
		dateRelease: {
			type: DataTypes.DATEONLY,
			allowNull: false,
			field: 'date_release'
		},
		typeTransportation: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'type_transportation'
		},
		afrmmValue: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'afrmm_value'
		},
		typeImport: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'type_import'
		},
		thirdpartyCnpj: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'thirdparty_cnpj'
		},
		thirdpartyStateId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_country_state',
				key: 'id'
			},
			field: 'thirdparty_state_id'
		},
		exportingCode: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'exporting_code'
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
		invoiceEletronicLineId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'invoice_eletronic_item',
				key: 'id'
			},
			field: 'invoice_eletronic_line_id'
		}
	}, {
		tableName: 'br_account_import_declaration',
		timestamps: false
	});
};
