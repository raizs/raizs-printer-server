/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountPaymentTermLine', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		value: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'value'
		},
		valueAmount: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'value_amount'
		},
		days: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'days'
		},
		option: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'option'
		},
		paymentId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_payment_term',
				key: 'id'
			},
			field: 'payment_id'
		},
		sequence: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'sequence'
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
		tableName: 'account_payment_term_line',
		timestamps: false
	});
};
