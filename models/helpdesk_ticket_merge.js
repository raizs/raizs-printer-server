/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('helpdeskTicketMerge', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		userId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'res_users',
				key: 'id'
			},
			field: 'user_id'
		},
		createNewTicket: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'create_new_ticket'
		},
		targetTicketName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'target_ticket_name'
		},
		targetHelpdeskId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'helpdesk_team',
				key: 'id'
			},
			field: 'target_helpdesk_id'
		},
		targetTicketId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'helpdesk_ticket',
				key: 'id'
			},
			field: 'target_ticket_id'
		},
		createUid: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_users',
				key: 'id'
			},
			field: 'create_uid'
		},
		createDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'create_date'
		},
		writeUid: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_users',
				key: 'id'
			},
			field: 'write_uid'
		},
		writeDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'write_date'
		}
	}, {
		tableName: 'helpdesk_ticket_merge',
		timestamps: false
	});
};
