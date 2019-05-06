/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('stockInventory', {
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
		date: {
			type: DataTypes.DATE,
			allowNull: false,
			field: 'date'
		},
		state: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'state'
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
			allowNull: true,
			references: {
				model: 'product_product',
				key: 'id'
			},
			field: 'product_id'
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
		partnerId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_partner',
				key: 'id'
			},
			field: 'partner_id'
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
		filter: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'filter'
		},
		categoryId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'product_category',
				key: 'id'
			},
			field: 'category_id'
		},
		exhausted: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'exhausted'
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
		accountingDate: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'accounting_date'
		}
	}, {
		tableName: 'stock_inventory',
		timestamps: false
	});
};
