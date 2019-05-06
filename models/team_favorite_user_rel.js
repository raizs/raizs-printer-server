/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('teamFavoriteUserRel', {
		teamId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'crm_team',
				key: 'id'
			},
			unique: true,
			field: 'team_id'
		},
		userId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'res_users',
				key: 'id'
			},
			field: 'user_id'
		}
	}, {
		tableName: 'team_favorite_user_rel',
		timestamps: false
	});
};
