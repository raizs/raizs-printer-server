/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('helpdeskTagHelpdeskTicketRel', {
		helpdeskTicketId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'helpdesk_ticket',
				key: 'id'
			},
			unique: true,
			field: 'helpdesk_ticket_id'
		},
		helpdeskTagId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'helpdesk_tag',
				key: 'id'
			},
			field: 'helpdesk_tag_id'
		}
	}, {
		tableName: 'helpdesk_tag_helpdesk_ticket_rel',
		timestamps: false
	});
};
