/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('mailActivityRel', {
		activityId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'mail_activity_type',
				key: 'id'
			},
			unique: true,
			field: 'activity_id'
		},
		recommendedId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'mail_activity_type',
				key: 'id'
			},
			field: 'recommended_id'
		}
	}, {
		tableName: 'mail_activity_rel',
		timestamps: false
	});
};
