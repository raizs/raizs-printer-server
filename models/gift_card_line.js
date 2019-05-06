/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('giftCardLine', {
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
		qtyLeft: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'qty_left'
		},
		giftCardId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'gift_card',
				key: 'id'
			},
			field: 'gift_card_id'
		},
		saleId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'sale_order',
				key: 'id'
			},
			field: 'sale_id'
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
		tableName: 'gift_card_line',
		timestamps: false
	});
};
