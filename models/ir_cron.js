/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('irCron', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		irActionsServerId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'ir_act_server',
				key: 'id'
			},
			field: 'ir_actions_server_id'
		},
		cronName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'cron_name'
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
		active: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'active'
		},
		intervalNumber: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'interval_number'
		},
		intervalType: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'interval_type'
		},
		numbercall: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'numbercall'
		},
		doall: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'doall'
		},
		nextcall: {
			type: DataTypes.DATE,
			allowNull: false,
			field: 'nextcall'
		},
		priority: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'priority'
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
		tableName: 'ir_cron',
		timestamps: false
	});
};
