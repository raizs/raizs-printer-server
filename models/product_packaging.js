/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('productPackaging', {
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
		sequence: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'sequence'
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
		qty: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'qty'
		},
		barcode: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'barcode'
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
		height: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'height'
		},
		width: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'width'
		},
		length: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'length'
		},
		maxWeight: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'max_weight'
		},
		shipperPackageCode: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'shipper_package_code'
		},
		packageCarrierType: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'package_carrier_type'
		}
	}, {
		tableName: 'product_packaging',
		timestamps: false
	});
};
