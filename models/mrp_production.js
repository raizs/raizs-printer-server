/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('mrpProduction', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			field: 'id'
		},
		messageLastPost: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'message_last_post'
		},
		name: {
			type: DataTypes.STRING,
			allowNull: true,
			unique: true,
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
		productQty: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'product_qty'
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
		pickingTypeId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'stock_picking_type',
				key: 'id'
			},
			field: 'picking_type_id'
		},
		locationSrcId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'stock_location',
				key: 'id'
			},
			field: 'location_src_id'
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
		datePlannedStart: {
			type: DataTypes.DATE,
			allowNull: false,
			field: 'date_planned_start'
		},
		datePlannedFinished: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'date_planned_finished'
		},
		dateStart: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'date_start'
		},
		dateFinished: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'date_finished'
		},
		bomId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'mrp_bom',
				key: 'id'
			},
			field: 'bom_id'
		},
		routingId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'mrp_routing',
				key: 'id'
			},
			field: 'routing_id'
		},
		state: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'state'
		},
		availability: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'availability'
		},
		userId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_users',
				key: 'id'
			},
			field: 'user_id'
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
		procurementGroupId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'procurement_group',
				key: 'id'
			},
			field: 'procurement_group_id'
		},
		propagate: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'propagate'
		},
		priority: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'priority'
		},
		isLocked: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'is_locked'
		},
		activityDateDeadline: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'activity_date_deadline'
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
		datePlannedStartWo: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'date_planned_start_wo'
		},
		datePlannedFinishedWo: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'date_planned_finished_wo'
		},
		lotId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'stock_production_lot',
				key: 'id'
			},
			field: 'lot_id'
		}
	}, {
		tableName: 'mrp_production',
		timestamps: false
	});
};
