/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('raizsUpdateQuantityWiz', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
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
		quantityDone: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'quantity_done'
		},
		productUomQty: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'product_uom_qty'
		},
		stockMoveId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'stock_move',
				key: 'id'
			},
			field: 'stock_move_id'
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
		tableName: 'raizs_update_quantity_wiz',
		timestamps: false
	});
};
