/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('rulePartnerRel', {
		ruleId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'sale_coupon_rule',
				key: 'id'
			},
			unique: true,
			field: 'rule_id'
		},
		partnerId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'res_partner',
				key: 'id'
			},
			field: 'partner_id'
		}
	}, {
		tableName: 'rule_partner_rel',
		timestamps: false
	});
};
