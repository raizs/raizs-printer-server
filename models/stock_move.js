/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('stockMove', {
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
		sequence: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'sequence'
		},
		priority: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'priority'
		},
		createDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'create_date'
		},
		date: {
			type: DataTypes.DATE,
			allowNull: false,
			field: 'date'
		},
		companyId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'res_company',
				key: 'id'
			},
			field: 'company_id'
		},
		dateExpected: {
			type: DataTypes.DATE,
			allowNull: false,
			field: 'date_expected'
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
		orderedQty: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'ordered_qty'
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
		productUom: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'product_uom',
				key: 'id'
			},
			field: 'product_uom'
		},
		productPackaging: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'product_packaging',
				key: 'id'
			},
			field: 'product_packaging'
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
		partnerId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_partner',
				key: 'id'
			},
			field: 'partner_id'
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
		note: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'note'
		},
		state: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'state'
		},
		priceUnit: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'price_unit'
		},
		origin: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'origin'
		},
		procureMethod: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'procure_method'
		},
		scrapped: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'scrapped'
		},
		groupId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'procurement_group',
				key: 'id'
			},
			field: 'group_id'
		},
		ruleId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'procurement_rule',
				key: 'id'
			},
			field: 'rule_id'
		},
		pushRuleId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'stock_location_path',
				key: 'id'
			},
			field: 'push_rule_id'
		},
		propagate: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'propagate'
		},
		pickingTypeId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'stock_picking_type',
				key: 'id'
			},
			field: 'picking_type_id'
		},
		inventoryId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'stock_inventory',
				key: 'id'
			},
			field: 'inventory_id'
		},
		originReturnedMoveId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'stock_move',
				key: 'id'
			},
			field: 'origin_returned_move_id'
		},
		restrictPartnerId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_partner',
				key: 'id'
			},
			field: 'restrict_partner_id'
		},
		warehouseId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'stock_warehouse',
				key: 'id'
			},
			field: 'warehouse_id'
		},
		additional: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'additional'
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
		toRefund: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'to_refund'
		},
		value: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'value'
		},
		remainingQty: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'remaining_qty'
		},
		remainingValue: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'remaining_value'
		},
		saleLineId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'sale_order_line',
				key: 'id'
			},
			field: 'sale_line_id'
		},
		purchaseLineId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'purchase_order_line',
				key: 'id'
			},
			field: 'purchase_line_id'
		},
		createdPurchaseLineId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'purchase_order_line',
				key: 'id'
			},
			field: 'created_purchase_line_id'
		},
		weight: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'weight'
		},
		weightUomId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'product_uom',
				key: 'id'
			},
			field: 'weight_uom_id'
		},
		createdProductionId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'mrp_production',
				key: 'id'
			},
			field: 'created_production_id'
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
		rawMaterialProductionId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'mrp_production',
				key: 'id'
			},
			field: 'raw_material_production_id'
		},
		unbuildId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'mrp_unbuild',
				key: 'id'
			},
			field: 'unbuild_id'
		},
		consumeUnbuildId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'mrp_unbuild',
				key: 'id'
			},
			field: 'consume_unbuild_id'
		},
		operationId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'mrp_routing_workcenter',
				key: 'id'
			},
			field: 'operation_id'
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
		bomLineId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'mrp_bom_line',
				key: 'id'
			},
			field: 'bom_line_id'
		},
		unitFactor: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'unit_factor'
		},
		isDone: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'is_done'
		},
		priorityOnPicking: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'priority_on_picking'
		},
		barcode: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'barcode'
		}
	}, {
		tableName: 'stock_move',
		timestamps: false
	});
};
