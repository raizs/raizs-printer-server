/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('teamStageRel', {
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
		helpdeskStageId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'helpdesk_stage',
				key: 'id'
			},
			field: 'helpdesk_stage_id'
		}
	}, {
		tableName: 'team_stage_rel',
		timestamps: false
	});
};
