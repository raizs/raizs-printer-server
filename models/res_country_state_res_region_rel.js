/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('resCountryStateResRegionRel', {
		resRegionId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'res_region',
				key: 'id'
			},
			unique: true,
			field: 'res_region_id'
		},
		resCountryStateId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'res_country_state',
				key: 'id'
			},
			field: 'res_country_state_id'
		}
	}, {
		tableName: 'res_country_state_res_region_rel',
		timestamps: false
	});
};
