/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('stockLocationRoute', {
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
		sequence: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'sequence'
		},
		productSelectable: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'product_selectable'
		},
		productCategSelectable: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'product_categ_selectable'
		},
		warehouseSelectable: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'warehouse_selectable'
		},
		suppliedWhId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'stock_warehouse',
				key: 'id'
			},
			field: 'supplied_wh_id'
		},
		supplierWhId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'stock_warehouse',
				key: 'id'
			},
			field: 'supplier_wh_id'
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
		saleSelectable: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'sale_selectable'
		}
	}, {
		tableName: 'stock_location_route',
		timestamps: false
	});
};
