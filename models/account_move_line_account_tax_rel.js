/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountMoveLineAccountTaxRel', {
		accountMoveLineId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_move_line',
				key: 'id'
			},
			unique: true,
			field: 'account_move_line_id'
		},
		accountTaxId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_tax',
				key: 'id'
			},
			field: 'account_tax_id'
		}
	}, {
		tableName: 'account_move_line_account_tax_rel',
		timestamps: false
	});
};
