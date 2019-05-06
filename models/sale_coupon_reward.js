/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('saleCouponReward', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		rewardDescription: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'reward_description'
		},
		rewardType: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'reward_type'
		},
		rewardProductId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'product_product',
				key: 'id'
			},
			field: 'reward_product_id'
		},
		rewardProductQuantity: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'reward_product_quantity'
		},
		discountType: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'discount_type'
		},
		discountPercentage: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'discount_percentage'
		},
		discountApplyOn: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'discount_apply_on'
		},
		discountSpecificProductId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'product_product',
				key: 'id'
			},
			field: 'discount_specific_product_id'
		},
		discountMaxAmount: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'discount_max_amount'
		},
		discountFixedAmount: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'discount_fixed_amount'
		},
		discountLineProductId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'product_product',
				key: 'id'
			},
			field: 'discount_line_product_id'
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
		tableName: 'sale_coupon_reward',
		timestamps: false
	});
};
