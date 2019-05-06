/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('mailTemplate', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		name: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'name'
		},
		modelId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'ir_model',
				key: 'id'
			},
			field: 'model_id'
		},
		model: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'model'
		},
		lang: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'lang'
		},
		userSignature: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'user_signature'
		},
		subject: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'subject'
		},
		emailFrom: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'email_from'
		},
		useDefaultTo: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'use_default_to'
		},
		emailTo: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'email_to'
		},
		partnerTo: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'partner_to'
		},
		emailCc: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'email_cc'
		},
		replyTo: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'reply_to'
		},
		mailServerId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'ir_mail_server',
				key: 'id'
			},
			field: 'mail_server_id'
		},
		bodyHtml: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'body_html'
		},
		reportName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'report_name'
		},
		reportTemplate: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'ir_act_report_xml',
				key: 'id'
			},
			field: 'report_template'
		},
		refIrActWindow: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'ir_act_window',
				key: 'id'
			},
			field: 'ref_ir_act_window'
		},
		autoDelete: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'auto_delete'
		},
		modelObjectField: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'ir_model_fields',
				key: 'id'
			},
			field: 'model_object_field'
		},
		subObject: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'ir_model',
				key: 'id'
			},
			field: 'sub_object'
		},
		subModelObjectField: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'ir_model_fields',
				key: 'id'
			},
			field: 'sub_model_object_field'
		},
		nullValue: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'null_value'
		},
		copyvalue: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'copyvalue'
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
		}
	}, {
		tableName: 'mail_template',
		timestamps: false
	});
};
