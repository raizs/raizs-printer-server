/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('employeeCategoryRel', {
		categoryId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'hr_employee_category',
				key: 'id'
			},
			unique: true,
			field: 'category_id'
		},
		empId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'hr_employee',
				key: 'id'
			},
			field: 'emp_id'
		}
	}, {
		tableName: 'employee_category_rel',
		timestamps: false
	});
};
