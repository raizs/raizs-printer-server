/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('stockMoveLine', {
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
		moveId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'stock_move',
				key: 'id'
			},
			field: 'move_id'
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
		productUomId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'product_uom',
				key: 'id'
			},
			field: 'product_uom_id'
		},
		productQty: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'product_qty'
		},
		productUomQty: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'product_uom_qty'
		},
		orderedQty: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'ordered_qty'
		},
		qtyDone: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'qty_done'
		},
		packageId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'stock_quant_package',
				key: 'id'
			},
			field: 'package_id'
		},
		lotId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'stock_production_lot',
				key: 'id'
			},
			field: 'lot_id'
		},
		lotName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'lot_name'
		},
		resultPackageId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'stock_quant_package',
				key: 'id'
			},
			field: 'result_package_id'
		},
		date: {
			type: DataTypes.DATE,
			allowNull: false,
			field: 'date'
		},
		ownerId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_partner',
				key: 'id'
			},
			field: 'owner_id'
		},
		locationId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'stock_location',
				key: 'id'
			},
			field: 'location_id'
		},
		locationDestId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'stock_location',
				key: 'id'
			},
			field: 'location_dest_id'
		},
		state: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'state'
		},
		reference: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'reference'
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
		},
		locationProcessed: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'location_processed'
		},
		workorderId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'mrp_workorder',
				key: 'id'
			},
			field: 'workorder_id'
		},
		productionId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'mrp_production',
				key: 'id'
			},
			field: 'production_id'
		},
		lotProducedId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'stock_production_lot',
				key: 'id'
			},
			field: 'lot_produced_id'
		},
		lotProducedQty: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'lot_produced_qty'
		},
		doneWo: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'done_wo'
		},
		doneMove: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'done_move'
		}
	}, {
		tableName: 'stock_move_line',
		timestamps: false
	});
};
