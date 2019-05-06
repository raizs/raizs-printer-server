/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('stockBarcodeLot', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		pickingId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'stock_picking',
				key: 'id'
			},
			field: 'picking_id'
		},
		productId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'product_product',
				key: 'id'
			},
			field: 'product_id'
		},
		qtyReserved: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'qty_reserved'
		},
		qtyDone: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'qty_done'
		},
		defaultMoveId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'stock_move',
				key: 'id'
			},
			field: 'default_move_id'
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
		tableName: 'stock_barcode_lot',
		timestamps: false
	});
};
