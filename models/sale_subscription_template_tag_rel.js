/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('saleSubscriptionTemplateTagRel', {
		templateId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'sale_subscription_template',
				key: 'id'
			},
			unique: true,
			field: 'template_id'
		},
		tagId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_analytic_tag',
				key: 'id'
			},
			field: 'tag_id'
		}
	}, {
		tableName: 'sale_subscription_template_tag_rel',
		timestamps: false
	});
};
