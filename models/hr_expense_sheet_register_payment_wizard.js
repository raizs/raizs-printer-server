/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('hrExpenseSheetRegisterPaymentWizard', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		partnerId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'res_partner',
				key: 'id'
			},
			field: 'partner_id'
		},
		journalId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_journal',
				key: 'id'
			},
			field: 'journal_id'
		},
		paymentMethodId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_payment_method',
				key: 'id'
			},
			field: 'payment_method_id'
		},
		amount: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'amount'
		},
		currencyId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'res_currency',
				key: 'id'
			},
			field: 'currency_id'
		},
		paymentDate: {
			type: DataTypes.DATEONLY,
			allowNull: false,
			field: 'payment_date'
		},
		communication: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'communication'
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
		tableName: 'hr_expense_sheet_register_payment_wizard',
		timestamps: false
	});
};
