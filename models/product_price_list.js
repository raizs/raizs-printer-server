/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('productPriceList', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		priceList: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'product_pricelist',
				key: 'id'
			},
			field: 'price_list'
		},
		qty1: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'qty1'
		},
		qty2: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'qty2'
		},
		qty3: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'qty3'
		},
		qty4: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'qty4'
		},
		qty5: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'qty5'
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
		tableName: 'product_price_list',
		timestamps: false
	});
};
