/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('resCurrency', {
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
		symbol: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'symbol'
		},
		rounding: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'rounding'
		},
		active: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'active'
		},
		position: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'position'
		},
		currencyUnitLabel: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'currency_unit_label'
		},
		currencySubunitLabel: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'currency_subunit_label'
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
		tableName: 'res_currency',
		timestamps: false
	});
};
