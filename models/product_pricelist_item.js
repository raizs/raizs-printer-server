/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('productPricelistItem', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
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
		productId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'product_product',
				key: 'id'
			},
			field: 'product_id'
		},
		categId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'product_category',
				key: 'id'
			},
			field: 'categ_id'
		},
		minQuantity: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'min_quantity'
		},
		appliedOn: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'applied_on'
		},
		base: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'base'
		},
		basePricelistId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'product_pricelist',
				key: 'id'
			},
			field: 'base_pricelist_id'
		},
		pricelistId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'product_pricelist',
				key: 'id'
			},
			field: 'pricelist_id'
		},
		priceSurcharge: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'price_surcharge'
		},
		priceDiscount: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'price_discount'
		},
		priceRound: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'price_round'
		},
		priceMinMargin: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'price_min_margin'
		},
		priceMaxMargin: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'price_max_margin'
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
			allowNull: true,
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
		computePrice: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'compute_price'
		},
		fixedPrice: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'fixed_price'
		},
		percentPrice: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'percent_price'
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
		tableName: 'product_pricelist_item',
		timestamps: false
	});
};
