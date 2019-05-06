/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('mailFollowersMailMessageSubtypeRel', {
		mailFollowersId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'mail_followers',
				key: 'id'
			},
			unique: true,
			field: 'mail_followers_id'
		},
		mailMessageSubtypeId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'mail_message_subtype',
				key: 'id'
			},
			field: 'mail_message_subtype_id'
		}
	}, {
		tableName: 'mail_followers_mail_message_subtype_rel',
		timestamps: false
	});
};
