/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountCashboxLine', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		coinValue: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'coin_value'
		},
		number: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'number'
		},
		cashboxId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_bank_statement_cashbox',
				key: 'id'
			},
			field: 'cashbox_id'
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
		tableName: 'account_cashbox_line',
		timestamps: false
	});
};
