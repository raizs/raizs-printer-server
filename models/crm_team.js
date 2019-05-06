/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('crmTeam', {
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
		active: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'active'
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
		userId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_users',
				key: 'id'
			},
			field: 'user_id'
		},
		replyTo: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'reply_to'
		},
		color: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'color'
		},
		teamType: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'team_type'
		},
		dashboardGraphModel: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'dashboard_graph_model'
		},
		dashboardGraphGroup: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'dashboard_graph_group'
		},
		dashboardGraphPeriod: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'dashboard_graph_period'
		},
		messageLastPost: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'message_last_post'
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
		},
		useQuotations: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'use_quotations'
		},
		useInvoices: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'use_invoices'
		},
		invoicedTarget: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'invoiced_target'
		}
	}, {
		tableName: 'crm_team',
		timestamps: false
	});
};
