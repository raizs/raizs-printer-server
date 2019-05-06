/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('stockPickingBackorderRel', {
		stockBackorderConfirmationId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'stock_backorder_confirmation',
				key: 'id'
			},
			unique: true,
			field: 'stock_backorder_confirmation_id'
		},
		stockPickingId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'stock_picking',
				key: 'id'
			},
			field: 'stock_picking_id'
		}
	}, {
		tableName: 'stock_picking_backorder_rel',
		timestamps: false
	});
};
