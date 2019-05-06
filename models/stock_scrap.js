/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('stockScrap', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'name'
		},
		origin: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'origin'
		},
		productId: {
			type: DataTypes.INTEGER,
			allowNull: false,
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
		lotId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'stock_production_lot',
				key: 'id'
			},
			field: 'lot_id'
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
		ownerId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_partner',
				key: 'id'
			},
			field: 'owner_id'
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
		pickingId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'stock_picking',
				key: 'id'
			},
			field: 'picking_id'
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
		scrapLocationId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'stock_location',
				key: 'id'
			},
			field: 'scrap_location_id'
		},
		scrapQty: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'scrap_qty'
		},
		state: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'state'
		},
		dateExpected: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'date_expected'
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
		productionId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'mrp_production',
				key: 'id'
			},
			field: 'production_id'
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
		inKg: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'in_kg'
		},
		reason: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'reason'
		}
	}, {
		tableName: 'stock_scrap',
		timestamps: false
	});
};
