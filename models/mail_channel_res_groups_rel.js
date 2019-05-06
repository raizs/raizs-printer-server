/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('mailChannelResGroupsRel', {
		mailChannelId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'mail_channel',
				key: 'id'
			},
			unique: true,
			field: 'mail_channel_id'
		},
		resGroupsId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'res_groups',
				key: 'id'
			},
			field: 'res_groups_id'
		}
	}, {
		tableName: 'mail_channel_res_groups_rel',
		timestamps: false
	});
};
