/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('mailWizardInvite', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		resModel: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'res_model'
		},
		resId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'res_id'
		},
		message: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'message'
		},
		sendMail: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'send_mail'
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
		tableName: 'mail_wizard_invite',
		timestamps: false
	});
};
