/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('relServerActions', {
		serverId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'ir_act_server',
				key: 'id'
			},
			unique: true,
			field: 'server_id'
		},
		actionId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'ir_act_server',
				key: 'id'
			},
			field: 'action_id'
		}
	}, {
		tableName: 'rel_server_actions',
		timestamps: false
	});
};
