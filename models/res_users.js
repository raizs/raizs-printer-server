/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('resUsers', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		active: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: true,
			field: 'active'
		},
		login: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			field: 'login'
		},
		password: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'password'
		},
		companyId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'res_company',
				key: 'id'
			},
			field: 'company_id'
		},
		partnerId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'res_partner',
				key: 'id'
			},
			field: 'partner_id'
		},
		signature: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'signature'
		},
		actionId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'action_id'
		},
		share: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'share'
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
		passwordCrypt: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'password_crypt'
		},
		aliasId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'mail_alias',
				key: 'id'
			},
			field: 'alias_id'
		},
		notificationType: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'notification_type'
		},
		saleTeamId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'crm_team',
				key: 'id'
			},
			field: 'sale_team_id'
		},
		helpdeskTargetClosed: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'helpdesk_target_closed'
		},
		helpdeskTargetRating: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'helpdesk_target_rating'
		},
		helpdeskTargetSuccess: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'helpdesk_target_success'
		},
		fuid: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'fuid'
		}
	}, {
		tableName: 'res_users',
		timestamps: false
	});
};
