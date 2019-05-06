/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('deliveryPriceRule', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		sequence: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'sequence'
		},
		carrierId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'delivery_carrier',
				key: 'id'
			},
			field: 'carrier_id'
		},
		variable: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'variable'
		},
		operator: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'operator'
		},
		maxValue: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'max_value'
		},
		listBasePrice: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'list_base_price'
		},
		listPrice: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'list_price'
		},
		variableFactor: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'variable_factor'
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
		tableName: 'delivery_price_rule',
		timestamps: false
	});
};
