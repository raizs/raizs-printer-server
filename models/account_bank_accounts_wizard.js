/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountBankAccountsWizard', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		accName: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'acc_name'
		},
		bankAccountId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'wizard_multi_charts_accounts',
				key: 'id'
			},
			field: 'bank_account_id'
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
		accountType: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'account_type'
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
		tableName: 'account_bank_accounts_wizard',
		timestamps: false
	});
};
