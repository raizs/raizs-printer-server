/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('productAttributePrice', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
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
		valueId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'product_attribute_value',
				key: 'id'
			},
			field: 'value_id'
		},
		priceExtra: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'price_extra'
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
		tableName: 'product_attribute_price',
		timestamps: false
	});
};
