/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('portalWizardUser', {
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
				model: 'portal_wizard',
				key: 'id'
			},
			field: 'wizard_id'
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
		email: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'email'
		},
		inPortal: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'in_portal'
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
		tableName: 'portal_wizard_user',
		timestamps: false
	});
};
