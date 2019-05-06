/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('mailTrackingValue', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		field: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'field'
		},
		fieldDesc: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'field_desc'
		},
		fieldType: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'field_type'
		},
		oldValueInteger: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'old_value_integer'
		},
		oldValueFloat: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'old_value_float'
		},
		oldValueMonetary: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'old_value_monetary'
		},
		oldValueChar: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'old_value_char'
		},
		oldValueText: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'old_value_text'
		},
		oldValueDatetime: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'old_value_datetime'
		},
		newValueInteger: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'new_value_integer'
		},
		newValueFloat: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'new_value_float'
		},
		newValueMonetary: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'new_value_monetary'
		},
		newValueChar: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'new_value_char'
		},
		newValueText: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'new_value_text'
		},
		newValueDatetime: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'new_value_datetime'
		},
		mailMessageId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'mail_message',
				key: 'id'
			},
			field: 'mail_message_id'
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
		tableName: 'mail_tracking_value',
		timestamps: false
	});
};
