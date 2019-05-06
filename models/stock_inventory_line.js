/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('stockInventoryLine', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
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
		partnerId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_partner',
				key: 'id'
			},
			field: 'partner_id'
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
		productName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'product_name'
		},
		productCode: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'product_code'
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
		locationId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'stock_location',
				key: 'id'
			},
			field: 'location_id'
		},
		locationName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'location_name'
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
		prodLotId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'stock_production_lot',
				key: 'id'
			},
			field: 'prod_lot_id'
		},
		prodlotName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'prodlot_name'
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
		theoreticalQty: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'theoretical_qty'
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
		tableName: 'stock_inventory_line',
		timestamps: false
	});
};
