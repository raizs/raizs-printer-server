/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountPayment', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
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
		name: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'name'
		},
		state: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'state'
		},
		paymentType: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'payment_type'
		},
		paymentReference: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'payment_reference'
		},
		moveName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'move_name'
		},
		destinationJournalId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_journal',
				key: 'id'
			},
			field: 'destination_journal_id'
		},
		paymentDifferenceHandling: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'payment_difference_handling'
		},
		writeoffAccountId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_account',
				key: 'id'
			},
			field: 'writeoff_account_id'
		},
		writeoffLabel: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'writeoff_label'
		},
		messageLastPost: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'message_last_post'
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
		paymentTransactionId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'payment_transaction',
				key: 'id'
			},
			field: 'payment_transaction_id'
		},
		paymentTokenId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'payment_token',
				key: 'id'
			},
			field: 'payment_token_id'
		},
		moveLineId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_move_line',
				key: 'id'
			},
			field: 'move_line_id'
		},
		batchDepositId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_batch_deposit',
				key: 'id'
			},
			field: 'batch_deposit_id'
		}
	}, {
		tableName: 'account_payment',
		timestamps: false
	});
};
