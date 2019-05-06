/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('resCountryResCountryGroupRel', {
		resCountryId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'res_country',
				key: 'id'
			},
			unique: true,
			field: 'res_country_id'
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
		tableName: 'res_country_res_country_group_rel',
		timestamps: false
	});
};
