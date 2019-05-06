/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('helpdeskTicket', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		campaignId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'utm_campaign',
				key: 'id'
			},
			field: 'campaign_id'
		},
		sourceId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'utm_source',
				key: 'id'
			},
			field: 'source_id'
		},
		mediumId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'utm_medium',
				key: 'id'
			},
			field: 'medium_id'
		},
		ratingLastValue: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'rating_last_value'
		},
		messageLastPost: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'message_last_post'
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'name'
		},
		accessToken: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'access_token'
		},
		teamId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'helpdesk_team',
				key: 'id'
			},
			field: 'team_id'
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'description'
		},
		active: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'active'
		},
		ticketTypeId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'helpdesk_ticket_type',
				key: 'id'
			},
			field: 'ticket_type_id'
		},
		companyId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_company',
				key: 'id'
			},
			field: 'company_id'
		},
		color: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'color'
		},
		kanbanState: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'kanban_state'
		},
		userId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_users',
				key: 'id'
			},
			field: 'user_id'
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
		partnerName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'partner_name'
		},
		partnerEmail: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'partner_email'
		},
		priority: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'priority'
		},
		stageId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'helpdesk_stage',
				key: 'id'
			},
			field: 'stage_id'
		},
		assignDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'assign_date'
		},
		assignHours: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'assign_hours'
		},
		closeDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'close_date'
		},
		closeHours: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'close_hours'
		},
		slaId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'helpdesk_sla',
				key: 'id'
			},
			field: 'sla_id'
		},
		slaName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'sla_name'
		},
		deadline: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'deadline'
		},
		slaActive: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'sla_active'
		},
		slaFail: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'sla_fail'
		},
		activityDateDeadline: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'activity_date_deadline'
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
		tableName: 'helpdesk_ticket',
		timestamps: false
	});
};
