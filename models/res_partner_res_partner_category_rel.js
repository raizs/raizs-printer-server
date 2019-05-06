/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('resPartnerResPartnerCategoryRel', {
		categoryId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'res_partner_category',
				key: 'id'
			},
			unique: true,
			field: 'category_id'
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
		tableName: 'res_partner_res_partner_category_rel',
		timestamps: false
	});
};
