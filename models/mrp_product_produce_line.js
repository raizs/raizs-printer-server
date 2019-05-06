/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('mrpProductProduceLine', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			field: 'id'
		},
		productProduceId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'mrp_product_produce',
				key: 'id'
			},
			field: 'product_produce_id'
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
		lotId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'stock_production_lot',
				key: 'id'
			},
			field: 'lot_id'
		},
		qtyToConsume: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'qty_to_consume'
		},
		productUomId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'product_uom',
				key: 'id'
			},
			field: 'product_uom_id'
		},
		qtyDone: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'qty_done'
		},
		moveId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'stock_move',
				key: 'id'
			},
			field: 'move_id'
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
		tableName: 'mrp_product_produce_line',
		timestamps: false
	});
};
