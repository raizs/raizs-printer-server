/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('hrExpenseSheet', {
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
		state: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'state'
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
		addressId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_partner',
				key: 'id'
			},
			field: 'address_id'
		},
		responsibleId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_users',
				key: 'id'
			},
			field: 'responsible_id'
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
		journalId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_journal',
				key: 'id'
			},
			field: 'journal_id'
		},
		bankJournalId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_journal',
				key: 'id'
			},
			field: 'bank_journal_id'
		},
		accountingDate: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'accounting_date'
		},
		accountMoveId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_move',
				key: 'id'
			},
			field: 'account_move_id'
		},
		departmentId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'hr_department',
				key: 'id'
			},
			field: 'department_id'
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
		tableName: 'hr_expense_sheet',
		timestamps: false
	});
};
