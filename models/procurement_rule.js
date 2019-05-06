/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('procurementRule', {
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
		active: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'active'
		},
		groupPropagationOption: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'group_propagation_option'
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
		action: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'action'
		},
		sequence: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'sequence'
		},
		companyId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_company',
				key: 'id'
			},
			field: 'company_id'
		},
		locationId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'stock_location',
				key: 'id'
			},
			field: 'location_id'
		},
		locationSrcId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'stock_location',
				key: 'id'
			},
			field: 'location_src_id'
		},
		routeId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'stock_location_route',
				key: 'id'
			},
			field: 'route_id'
		},
		procureMethod: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'procure_method'
		},
		routeSequence: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'route_sequence'
		},
		pickingTypeId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'stock_picking_type',
				key: 'id'
			},
			field: 'picking_type_id'
		},
		delay: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'delay'
		},
		partnerAddressId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_partner',
				key: 'id'
			},
			field: 'partner_address_id'
		},
		propagate: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'propagate'
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
		propagateWarehouseId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'stock_warehouse',
				key: 'id'
			},
			field: 'propagate_warehouse_id'
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
		tableName: 'procurement_rule',
		timestamps: false
	});
};
