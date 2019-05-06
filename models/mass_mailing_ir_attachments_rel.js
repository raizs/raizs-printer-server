/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('massMailingIrAttachmentsRel', {
		massMailingId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'mail_mass_mailing',
				key: 'id'
			},
			unique: true,
			field: 'mass_mailing_id'
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
		tableName: 'mass_mailing_ir_attachments_rel',
		timestamps: false
	});
};
