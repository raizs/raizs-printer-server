/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('saleSubscriptionLine', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
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
		analyticAccountId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'sale_subscription',
				key: 'id'
			},
			field: 'analytic_account_id'
		},
		name: {
			type: DataTypes.TEXT,
			allowNull: false,
			field: 'name'
		},
		quantity: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'quantity'
		},
		uomId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'product_uom',
				key: 'id'
			},
			field: 'uom_id'
		},
		priceUnit: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'price_unit'
		},
		discount: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'discount'
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
		originalOrderId: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'original_order_id'
		},
		periodicity: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'periodicity'
		},
		interval: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'interval'
		},
		status: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'status'
		},
		skuName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'sku_name'
		},
		sku: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'sku'
		}
	}, {
		tableName: 'sale_subscription_line',
		timestamps: false
	});
};
