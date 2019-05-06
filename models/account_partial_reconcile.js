/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountPartialReconcile', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		debitMoveId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_move_line',
				key: 'id'
			},
			field: 'debit_move_id'
		},
		creditMoveId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_move_line',
				key: 'id'
			},
			field: 'credit_move_id'
		},
		amount: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'amount'
		},
		amountCurrency: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'amount_currency'
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
		companyId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_company',
				key: 'id'
			},
			field: 'company_id'
		},
		fullReconcileId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_full_reconcile',
				key: 'id'
			},
			field: 'full_reconcile_id'
		},
		maxDate: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'max_date'
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
		tableName: 'account_partial_reconcile',
		timestamps: false
	});
};
