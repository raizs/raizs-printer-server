/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('baseAutomationLeadTest', {
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
		userId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_users',
				key: 'id'
			},
			field: 'user_id'
		},
		state: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'state'
		},
		active: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'active'
		},
		partnerId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_partner',
				key: 'id'
			},
			field: 'partner_id'
		},
		dateActionLast: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'date_action_last'
		},
		customer: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'customer'
		},
		priority: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'priority'
		},
		deadline: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'deadline'
		},
		isAssignedToAdmin: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'is_assigned_to_admin'
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
		tableName: 'base_automation_lead_test',
		timestamps: false
	});
};
