/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('resRegionResStateCityRel', {
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
		resStateCityId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'res_state_city',
				key: 'id'
			},
			field: 'res_state_city_id'
		}
	}, {
		tableName: 'res_region_res_state_city_rel',
		timestamps: false
	});
};
