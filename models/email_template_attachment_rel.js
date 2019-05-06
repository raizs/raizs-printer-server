/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('emailTemplateAttachmentRel', {
		emailTemplateId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'mail_template',
				key: 'id'
			},
			unique: true,
			field: 'email_template_id'
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
		tableName: 'email_template_attachment_rel',
		timestamps: false
	});
};
