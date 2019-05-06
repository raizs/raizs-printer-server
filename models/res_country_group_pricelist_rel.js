/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('resCountryGroupPricelistRel', {
		pricelistId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'product_pricelist',
				key: 'id'
			},
			unique: true,
			field: 'pricelist_id'
		},
		resCountryGroupId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'res_country_group',
				key: 'id'
			},
			field: 'res_country_group_id'
		}
	}, {
		tableName: 'res_country_group_pricelist_rel',
		timestamps: false
	});
};
