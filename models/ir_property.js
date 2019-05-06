/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('irProperty', {
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
		resId: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'res_id'
		},
		companyId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_company',
				key: 'id'
			},
			field: 'company_id'
		},
		fieldsId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'ir_model_fields',
				key: 'id'
			},
			field: 'fields_id'
		},
		valueFloat: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'value_float'
		},
		valueInteger: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'value_integer'
		},
		valueText: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'value_text'
		},
		valueBinary: {
			type: "BYTEA",
			allowNull: true,
			field: 'value_binary'
		},
		valueReference: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'value_reference'
		},
		valueDatetime: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'value_datetime'
		},
		type: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'type'
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
		tableName: 'ir_property',
		timestamps: false
	});
};
