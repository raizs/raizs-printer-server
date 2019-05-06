/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('hrExpenseRefuseWizard', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		reason: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'reason'
		},
		hrExpenseSheetId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'hr_expense_sheet',
				key: 'id'
			},
			field: 'hr_expense_sheet_id'
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
		tableName: 'hr_expense_refuse_wizard',
		timestamps: false
	});
};
