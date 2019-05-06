/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('subscriptionBasketLine', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		name: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'name'
		},
		dataType: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'data_type'
		},
		basketId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'subscription_basket',
				key: 'id'
			},
			field: 'basket_id'
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
		minQuantity: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'min_quantity'
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
		sequence: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'sequence'
		}
	}, {
		tableName: 'subscription_basket_line',
		timestamps: false
	});
};
