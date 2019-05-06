/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('mailMail', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		mailMessageId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'mail_message',
				key: 'id'
			},
			field: 'mail_message_id'
		},
		bodyHtml: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'body_html'
		},
		references: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'references'
		},
		headers: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'headers'
		},
		notification: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'notification'
		},
		emailTo: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'email_to'
		},
		emailCc: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'email_cc'
		},
		state: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'state'
		},
		autoDelete: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'auto_delete'
		},
		failureReason: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'failure_reason'
		},
		scheduledDate: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'scheduled_date'
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
		fetchmailServerId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'fetchmail_server',
				key: 'id'
			},
			field: 'fetchmail_server_id'
		},
		mailingId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'mail_mass_mailing',
				key: 'id'
			},
			field: 'mailing_id'
		}
	}, {
		tableName: 'mail_mail',
		timestamps: false
	});
};
