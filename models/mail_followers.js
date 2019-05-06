/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('mailFollowers', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		resModel: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			field: 'res_model'
		},
		resId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			primaryKey: true,
			field: 'res_id'
		},
		partnerId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_partner',
				key: 'id'
			},
			field: 'partner_id'
		},
		channelId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'mail_channel',
				key: 'id'
			},
			field: 'channel_id'
		}
	}, {
		tableName: 'mail_followers',
		timestamps: false
	});
};
