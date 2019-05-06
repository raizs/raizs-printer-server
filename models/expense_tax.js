/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('expenseTax', {
		expenseId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'hr_expense',
				key: 'id'
			},
			unique: true,
			field: 'expense_id'
		},
		taxId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_tax',
				key: 'id'
			},
			field: 'tax_id'
		}
	}, {
		tableName: 'expense_tax',
		timestamps: false
	});
};
