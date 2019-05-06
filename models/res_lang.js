/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('resLang', {
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
			allowNull: false,
			unique: true,
			field: 'code'
		},
		isoCode: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'iso_code'
		},
		translatable: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'translatable'
		},
		active: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'active'
		},
		direction: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'direction'
		},
		dateFormat: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'date_format'
		},
		timeFormat: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'time_format'
		},
		grouping: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'grouping'
		},
		decimalPoint: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'decimal_point'
		},
		thousandsSep: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'thousands_sep'
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
		tableName: 'res_lang',
		timestamps: false
	});
};
