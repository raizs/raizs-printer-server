/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('saleCouponProgram', {
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
		active: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'active'
		},
		ruleId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'sale_coupon_rule',
				key: 'id'
			},
			field: 'rule_id'
		},
		rewardId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'sale_coupon_reward',
				key: 'id'
			},
			field: 'reward_id'
		},
		sequence: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'sequence'
		},
		maximumUseNumber: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'maximum_use_number'
		},
		programType: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'program_type'
		},
		promoCodeUsage: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'promo_code_usage'
		},
		promoCode: {
			type: DataTypes.STRING,
			allowNull: true,
			unique: true,
			field: 'promo_code'
		},
		promoApplicability: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'promo_applicability'
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
		validityDuration: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'validity_duration'
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
		tableName: 'sale_coupon_program',
		timestamps: false
	});
};
