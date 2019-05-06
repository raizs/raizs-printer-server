/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('hrExpense', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		messageLastPost: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'message_last_post'
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'name'
		},
		date: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'date'
		},
		employeeId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'hr_employee',
				key: 'id'
			},
			field: 'employee_id'
		},
		productId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'product_product',
				key: 'id'
			},
			field: 'product_id'
		},
		productUomId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'product_uom',
				key: 'id'
			},
			field: 'product_uom_id'
		},
		unitAmount: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'unit_amount'
		},
		quantity: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'quantity'
		},
		untaxedAmount: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'untaxed_amount'
		},
		totalAmount: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'total_amount'
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
		currencyId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_currency',
				key: 'id'
			},
			field: 'currency_id'
		},
		analyticAccountId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_analytic_account',
				key: 'id'
			},
			field: 'analytic_account_id'
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
		description: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'description'
		},
		paymentMode: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'payment_mode'
		},
		state: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'state'
		},
		sheetId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'hr_expense_sheet',
				key: 'id'
			},
			field: 'sheet_id'
		},
		reference: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'reference'
		},
		isRefused: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'is_refused'
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
		tableName: 'hr_expense',
		timestamps: false
	});
};
