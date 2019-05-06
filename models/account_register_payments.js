/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountRegisterPayments', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		paymentType: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'payment_type'
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
		partnerType: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'partner_type'
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
		journalId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_journal',
				key: 'id'
			},
			field: 'journal_id'
		},
		multi: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'multi'
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
		tableName: 'account_register_payments',
		timestamps: false
	});
};
