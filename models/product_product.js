/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('productProduct', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		defaultCode: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'default_code'
		},
		active: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'active'
		},
		productTmplId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'product_template',
				key: 'id'
			},
			field: 'product_tmpl_id'
		},
		barcode: {
			type: DataTypes.STRING,
			allowNull: true,
			unique: true,
			field: 'barcode'
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
		productId: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'productId'
		},
		refId: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'refId'
		},
		height: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'height'
		},
		length: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'length'
		},
		width: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'width'
		},
		sku: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'sku'
		},
		sellerId: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'sellerId'
		},
		imageUrl: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'image_url'
		},
		vtexStatus: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'vtex_status'
		},
		stockUpdatePending: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'stock_update_pending'
		},
		markup: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'markup'
		}
	}, {
		tableName: 'product_product',
		timestamps: false
	});
};
