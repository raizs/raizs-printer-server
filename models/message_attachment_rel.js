/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('messageAttachmentRel', {
		messageId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'mail_message',
				key: 'id'
			},
			unique: true,
			field: 'message_id'
		},
		attachmentId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'ir_attachment',
				key: 'id'
			},
			field: 'attachment_id'
		}
	}, {
		tableName: 'message_attachment_rel',
		timestamps: false
	});
};
