/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('resCountry', {
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
			unique: true,
			field: 'name'
		},
		code: {
			type: DataTypes.STRING,
			allowNull: true,
			unique: true,
			field: 'code'
		},
		addressFormat: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'address_format'
		},
		addressViewId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'ir_ui_view',
				key: 'id'
			},
			field: 'address_view_id'
		},
		currencyId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_currency',
				key: 'id'
			},
			field: 'currency_id'
		},
		phoneCode: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'phone_code'
		},
		namePosition: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'name_position'
		},
		vatLabel: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'vat_label'
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
		bcCode: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'bc_code'
		},
		ibgeCode: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'ibge_code'
		},
		siscomexCode: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'siscomex_code'
		}
	}, {
		tableName: 'res_country',
		timestamps: false
	});
};
