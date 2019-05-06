/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('decimalPrecisionTest', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		float: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'float'
		},
		float2: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'float_2'
		},
		float4: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'float_4'
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
		tableName: 'decimal_precision_test',
		timestamps: false
	});
};
