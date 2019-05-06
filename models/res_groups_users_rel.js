/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('resGroupsUsersRel', {
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
		uid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'res_users',
				key: 'id'
			},
			field: 'uid'
		}
	}, {
		tableName: 'res_groups_users_rel',
		timestamps: false
	});
};
