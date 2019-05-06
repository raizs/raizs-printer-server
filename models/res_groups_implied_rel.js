/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('resGroupsImpliedRel', {
		gid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'res_groups',
				key: 'id'
			},
			unique: true,
			field: 'gid'
		},
		hid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'res_groups',
				key: 'id'
			},
			field: 'hid'
		}
	}, {
		tableName: 'res_groups_implied_rel',
		timestamps: false
	});
};
