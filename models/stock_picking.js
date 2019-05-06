/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('stockPicking', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
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
		note: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'note'
		},
		backorderId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'stock_picking',
				key: 'id'
			},
			field: 'backorder_id'
		},
		moveType: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'move_type'
		},
		state: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'state'
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
		priority: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'priority'
		},
		scheduledDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'scheduled_date'
		},
		date: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'date'
		},
		dateDone: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'date_done'
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
		pickingTypeId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'stock_picking_type',
				key: 'id'
			},
			field: 'picking_type_id'
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
		companyId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'res_company',
				key: 'id'
			},
			field: 'company_id'
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
		printed: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'printed'
		},
		isLocked: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'is_locked'
		},
		messageLastPost: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'message_last_post'
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
		saleId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'sale_order',
				key: 'id'
			},
			field: 'sale_id'
		},
		carrierPrice: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'carrier_price'
		},
		carrierId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'delivery_carrier',
				key: 'id'
			},
			field: 'carrier_id'
		},
		volume: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'volume'
		},
		weight: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'weight'
		},
		carrierTrackingRef: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'carrier_tracking_ref'
		},
		numberOfPackages: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'number_of_packages'
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
		assignedUser: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_users',
				key: 'id'
			},
			field: 'assigned_user'
		},
		barcode: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'barcode'
		}
	}, {
		tableName: 'stock_picking',
		timestamps: false
	});
};
