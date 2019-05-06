/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountInvoiceTax', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		invoiceId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_invoice',
				key: 'id'
			},
			field: 'invoice_id'
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'name'
		},
		taxId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_tax',
				key: 'id'
			},
			field: 'tax_id'
		},
		accountId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_account',
				key: 'id'
			},
			field: 'account_id'
		},
		accountAnalyticId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_analytic_account',
				key: 'id'
			},
			field: 'account_analytic_id'
		},
		amount: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'amount'
		},
		amountRounding: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'amount_rounding'
		},
		manual: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'manual'
		},
		sequence: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'sequence'
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
		base: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'base'
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
		tableName: 'account_invoice_tax',
		timestamps: false
	});
};
