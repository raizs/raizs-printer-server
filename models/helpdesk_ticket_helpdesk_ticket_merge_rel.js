/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('helpdeskTicketHelpdeskTicketMergeRel', {
		helpdeskTicketMergeId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'helpdesk_ticket_merge',
				key: 'id'
			},
			unique: true,
			field: 'helpdesk_ticket_merge_id'
		},
		helpdeskTicketId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'helpdesk_ticket',
				key: 'id'
			},
			field: 'helpdesk_ticket_id'
		}
	}, {
		tableName: 'helpdesk_ticket_helpdesk_ticket_merge_rel',
		timestamps: false
	});
};
