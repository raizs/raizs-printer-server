/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('productUom', {
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
		categoryId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'product_uom_categ',
				key: 'id'
			},
			field: 'category_id'
		},
		factor: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'factor'
		},
		rounding: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'rounding'
		},
		active: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'active'
		},
		uomType: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'uom_type'
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
		tableName: 'product_uom',
		timestamps: false
	});
};
