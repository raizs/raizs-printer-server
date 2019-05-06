/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('chooseDeliveryPackage', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		stockQuantPackageId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'stock_quant_package',
				key: 'id'
			},
			field: 'stock_quant_package_id'
		},
		deliveryPackagingId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'product_packaging',
				key: 'id'
			},
			field: 'delivery_packaging_id'
		},
		shippingWeight: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'shipping_weight'
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
		tableName: 'choose_delivery_package',
		timestamps: false
	});
};
