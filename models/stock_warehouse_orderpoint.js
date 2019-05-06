/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('stockWarehouseOrderpoint', {
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
		warehouseId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'stock_warehouse',
				key: 'id'
			},
			field: 'warehouse_id'
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
		productId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'product_product',
				key: 'id'
			},
			field: 'product_id'
		},
		productMinQty: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'product_min_qty'
		},
		productMaxQty: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'product_max_qty'
		},
		qtyMultiple: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'qty_multiple'
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
		companyId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'res_company',
				key: 'id'
			},
			field: 'company_id'
		},
		leadDays: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'lead_days'
		},
		leadType: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'lead_type'
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
		tableName: 'stock_warehouse_orderpoint',
		timestamps: false
	});
};
