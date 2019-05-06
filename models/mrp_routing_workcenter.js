/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('mrpRoutingWorkcenter', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			field: 'id'
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'name'
		},
		workcenterId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'mrp_workcenter',
				key: 'id'
			},
			field: 'workcenter_id'
		},
		sequence: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'sequence'
		},
		routingId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'mrp_routing',
				key: 'id'
			},
			field: 'routing_id'
		},
		note: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'note'
		},
		companyId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_company',
				key: 'id'
			},
			field: 'company_id'
		},
		worksheet: {
			type: "BYTEA",
			allowNull: true,
			field: 'worksheet'
		},
		timeMode: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'time_mode'
		},
		timeModeBatch: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'time_mode_batch'
		},
		timeCycleManual: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'time_cycle_manual'
		},
		batch: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'batch'
		},
		batchSize: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'batch_size'
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
		tableName: 'mrp_routing_workcenter',
		timestamps: false
	});
};
