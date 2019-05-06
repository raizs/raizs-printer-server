/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('productSupplierinfo', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		name: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'res_partner',
				key: 'id'
			},
			field: 'name'
		},
		productName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'product_name'
		},
		productCode: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'product_code'
		},
		sequence: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'sequence'
		},
		minQty: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'min_qty'
		},
		price: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'price'
		},
		companyId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_company',
				key: 'id'
			},
			field: 'company_id'
		},
		currencyId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'res_currency',
				key: 'id'
			},
			field: 'currency_id'
		},
		dateStart: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'date_start'
		},
		dateEnd: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'date_end'
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
		productTmplId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'product_template',
				key: 'id'
			},
			field: 'product_tmpl_id'
		},
		delay: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'delay'
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
		tableName: 'product_supplierinfo',
		timestamps: false
	});
};
