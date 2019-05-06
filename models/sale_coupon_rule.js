/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('saleCouponRule', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		ruleDateFrom: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'rule_date_from'
		},
		ruleDateTo: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'rule_date_to'
		},
		rulePartnersDomain: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'rule_partners_domain'
		},
		ruleProductsDomain: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'rule_products_domain'
		},
		ruleMinQuantity: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'rule_min_quantity'
		},
		ruleMinimumAmount: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'rule_minimum_amount'
		},
		ruleMinimumAmountTaxInclusion: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'rule_minimum_amount_tax_inclusion'
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
		tableName: 'sale_coupon_rule',
		timestamps: false
	});
};
