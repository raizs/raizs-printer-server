/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('irMailServer', {
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
		smtpHost: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'smtp_host'
		},
		smtpPort: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'smtp_port'
		},
		smtpUser: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'smtp_user'
		},
		smtpPass: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'smtp_pass'
		},
		smtpEncryption: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'smtp_encryption'
		},
		smtpDebug: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'smtp_debug'
		},
		sequence: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'sequence'
		},
		active: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'active'
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
		tableName: 'ir_mail_server',
		timestamps: false
	});
};
