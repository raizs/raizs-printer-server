/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('stockWarehouse', {
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
			unique: true,
			field: 'name'
		},
		active: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'active'
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
		partnerId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_partner',
				key: 'id'
			},
			field: 'partner_id'
		},
		viewLocationId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'stock_location',
				key: 'id'
			},
			field: 'view_location_id'
		},
		lotStockId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'stock_location',
				key: 'id'
			},
			field: 'lot_stock_id'
		},
		code: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			field: 'code'
		},
		receptionSteps: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'reception_steps'
		},
		deliverySteps: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'delivery_steps'
		},
		whInputStockLocId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'stock_location',
				key: 'id'
			},
			field: 'wh_input_stock_loc_id'
		},
		whQcStockLocId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'stock_location',
				key: 'id'
			},
			field: 'wh_qc_stock_loc_id'
		},
		whOutputStockLocId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'stock_location',
				key: 'id'
			},
			field: 'wh_output_stock_loc_id'
		},
		whPackStockLocId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'stock_location',
				key: 'id'
			},
			field: 'wh_pack_stock_loc_id'
		},
		mtoPullId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'procurement_rule',
				key: 'id'
			},
			field: 'mto_pull_id'
		},
		pickTypeId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'stock_picking_type',
				key: 'id'
			},
			field: 'pick_type_id'
		},
		packTypeId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'stock_picking_type',
				key: 'id'
			},
			field: 'pack_type_id'
		},
		outTypeId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'stock_picking_type',
				key: 'id'
			},
			field: 'out_type_id'
		},
		inTypeId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'stock_picking_type',
				key: 'id'
			},
			field: 'in_type_id'
		},
		intTypeId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'stock_picking_type',
				key: 'id'
			},
			field: 'int_type_id'
		},
		crossdockRouteId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'stock_location_route',
				key: 'id'
			},
			field: 'crossdock_route_id'
		},
		receptionRouteId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'stock_location_route',
				key: 'id'
			},
			field: 'reception_route_id'
		},
		deliveryRouteId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'stock_location_route',
				key: 'id'
			},
			field: 'delivery_route_id'
		},
		defaultResupplyWhId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'stock_warehouse',
				key: 'id'
			},
			field: 'default_resupply_wh_id'
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
		buyToResupply: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'buy_to_resupply'
		},
		buyPullId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'procurement_rule',
				key: 'id'
			},
			field: 'buy_pull_id'
		},
		vtexId: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'vtex_id'
		},
		manufactureToResupply: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'manufacture_to_resupply'
		},
		manufacturePullId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'procurement_rule',
				key: 'id'
			},
			field: 'manufacture_pull_id'
		},
		manuTypeId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'stock_picking_type',
				key: 'id'
			},
			field: 'manu_type_id'
		}
	}, {
		tableName: 'stock_warehouse',
		timestamps: false
	});
};
