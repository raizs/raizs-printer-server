/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('stockPickingTransferRel', {
		stockImmediateTransferId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'stock_immediate_transfer',
				key: 'id'
			},
			unique: true,
			field: 'stock_immediate_transfer_id'
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
		tableName: 'stock_picking_transfer_rel',
		timestamps: false
	});
};
