/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('mailComposeMessageIrAttachmentsRel', {
		wizardId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'mail_compose_message',
				key: 'id'
			},
			unique: true,
			field: 'wizard_id'
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
		tableName: 'mail_compose_message_ir_attachments_rel',
		timestamps: false
	});
};
