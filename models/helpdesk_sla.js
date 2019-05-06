/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('helpdeskSla', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'name'
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
		teamId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'helpdesk_team',
				key: 'id'
			},
			field: 'team_id'
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
		stageId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'helpdesk_stage',
				key: 'id'
			},
			field: 'stage_id'
		},
		priority: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'priority'
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
		timeDays: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'time_days'
		},
		timeHours: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'time_hours'
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
		tableName: 'helpdesk_sla',
		timestamps: false
	});
};
