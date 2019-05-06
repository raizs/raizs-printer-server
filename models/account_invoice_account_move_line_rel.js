/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountInvoiceAccountMoveLineRel', {
		accountInvoiceId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_invoice',
				key: 'id'
			},
			unique: true,
			field: 'account_invoice_id'
		},
		accountMoveLineId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_move_line',
				key: 'id'
			},
			field: 'account_move_line_id'
		}
	}, {
		tableName: 'account_invoice_account_move_line_rel',
		timestamps: false
	});
};
