/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('stockReturnPickingLine', {
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
		quantity: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'quantity'
		},
		wizardId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'stock_return_picking',
				key: 'id'
			},
			field: 'wizard_id'
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
		},
		toRefund: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'to_refund'
		}
	}, {
		tableName: 'stock_return_picking_line',
		timestamps: false
	});
};
