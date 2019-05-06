/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('baseAutomation', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		actionServerId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'ir_act_server',
				key: 'id'
			},
			field: 'action_server_id'
		},
		active: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'active'
		},
		trigger: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'trigger'
		},
		trgDateId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'ir_model_fields',
				key: 'id'
			},
			field: 'trg_date_id'
		},
		trgDateRange: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'trg_date_range'
		},
		trgDateRangeType: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'trg_date_range_type'
		},
		trgDateCalendarId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'resource_calendar',
				key: 'id'
			},
			field: 'trg_date_calendar_id'
		},
		filterPreDomain: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'filter_pre_domain'
		},
		filterDomain: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'filter_domain'
		},
		lastRun: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'last_run'
		},
		onChangeFields: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'on_change_fields'
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
		trgDateResourceFieldId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'ir_model_fields',
				key: 'id'
			},
			field: 'trg_date_resource_field_id'
		}
	}, {
		tableName: 'base_automation',
		timestamps: false
	});
};
