/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('helpdeskTeam', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		aliasId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'mail_alias',
				key: 'id'
			},
			field: 'alias_id'
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
		description: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'description'
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
		sequence: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'sequence'
		},
		color: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'color'
		},
		assignMethod: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'assign_method'
		},
		useAlias: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'use_alias'
		},
		useWebsiteHelpdeskForm: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'use_website_helpdesk_form'
		},
		useWebsiteHelpdeskLivechat: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'use_website_helpdesk_livechat'
		},
		useWebsiteHelpdeskForum: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'use_website_helpdesk_forum'
		},
		useWebsiteHelpdeskSlides: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'use_website_helpdesk_slides'
		},
		useHelpdeskTimesheet: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'use_helpdesk_timesheet'
		},
		useTwitter: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'use_twitter'
		},
		useApi: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'use_api'
		},
		useRating: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'use_rating'
		},
		portalShowRating: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'portal_show_rating'
		},
		useSla: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'use_sla'
		},
		percentageSatisfaction: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'percentage_satisfaction'
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
		tableName: 'helpdesk_team',
		timestamps: false
	});
};
