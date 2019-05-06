/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('helpdeskTeamResUsersRel', {
		helpdeskTeamId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'helpdesk_team',
				key: 'id'
			},
			unique: true,
			field: 'helpdesk_team_id'
		},
		resUsersId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'res_users',
				key: 'id'
			},
			field: 'res_users_id'
		}
	}, {
		tableName: 'helpdesk_team_res_users_rel',
		timestamps: false
	});
};
