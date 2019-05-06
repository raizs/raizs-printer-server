/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountCashRounding', {
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
		rounding: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'rounding'
		},
		strategy: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'strategy'
		},
		accountId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_account',
				key: 'id'
			},
			field: 'account_id'
		},
		roundingMethod: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'rounding_method'
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
		tableName: 'account_cash_rounding',
		timestamps: false
	});
};
