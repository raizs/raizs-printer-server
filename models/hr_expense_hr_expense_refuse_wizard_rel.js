/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('hrExpenseHrExpenseRefuseWizardRel', {
		hrExpenseRefuseWizardId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'hr_expense_refuse_wizard',
				key: 'id'
			},
			unique: true,
			field: 'hr_expense_refuse_wizard_id'
		},
		hrExpenseId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'hr_expense',
				key: 'id'
			},
			field: 'hr_expense_id'
		}
	}, {
		tableName: 'hr_expense_hr_expense_refuse_wizard_rel',
		timestamps: false
	});
};
