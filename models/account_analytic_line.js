/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountAnalyticLine', {
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
		date: {
			type: DataTypes.DATEONLY,
			allowNull: false,
			field: 'date'
		},
		amount: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'amount'
		},
		unitAmount: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'unit_amount'
		},
		accountId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_analytic_account',
				key: 'id'
			},
			field: 'account_id'
		},
		partnerId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_partner',
				key: 'id'
			},
			field: 'partner_id'
		},
		userId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_users',
				key: 'id'
			},
			field: 'user_id'
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
		},
		productUomId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'product_uom',
				key: 'id'
			},
			field: 'product_uom_id'
		},
		productId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'product_product',
				key: 'id'
			},
			field: 'product_id'
		},
		generalAccountId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_account',
				key: 'id'
			},
			field: 'general_account_id'
		},
		moveId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_move_line',
				key: 'id'
			},
			field: 'move_id'
		},
		code: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'code'
		},
		ref: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'ref'
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
		amountCurrency: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'amount_currency'
		},
		soLine: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'sale_order_line',
				key: 'id'
			},
			field: 'so_line'
		}
	}, {
		tableName: 'account_analytic_line',
		timestamps: false
	});
};
