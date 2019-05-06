/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('stockChangeProductQty', {
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
		productTmplId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'product_template',
				key: 'id'
			},
			field: 'product_tmpl_id'
		},
		newQuantity: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'new_quantity'
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
		locationId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'stock_location',
				key: 'id'
			},
			field: 'location_id'
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
		tableName: 'stock_change_product_qty',
		timestamps: false
	});
};
