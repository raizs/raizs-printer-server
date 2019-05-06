/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('changePasswordUser', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		wizardId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'change_password_wizard',
				key: 'id'
			},
			field: 'wizard_id'
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
		userLogin: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'user_login'
		},
		newPasswd: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'new_passwd'
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
		tableName: 'change_password_user',
		timestamps: false
	});
};
