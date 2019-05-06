/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('stockBarcodeLotLine', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		lotName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'lot_name'
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
		stockBarcodeLotId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'stock_barcode_lot',
				key: 'id'
			},
			field: 'stock_barcode_lot_id'
		},
		moveLineId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'stock_move_line',
				key: 'id'
			},
			field: 'move_line_id'
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
		tableName: 'stock_barcode_lot_line',
		timestamps: false
	});
};
