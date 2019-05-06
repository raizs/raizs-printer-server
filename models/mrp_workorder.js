/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('mrpWorkorder', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			field: 'id'
		},
		messageLastPost: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'message_last_post'
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
		productionId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'mrp_production',
				key: 'id'
			},
			field: 'production_id'
		},
		productId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'product_product',
				key: 'id'
			},
			field: 'product_id'
		},
		productionAvailability: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'production_availability'
		},
		qtyProduced: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'qty_produced'
		},
		qtyProducing: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'qty_producing'
		},
		state: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'state'
		},
		datePlannedStart: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'date_planned_start'
		},
		datePlannedFinished: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'date_planned_finished'
		},
		dateStart: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'date_start'
		},
		dateFinished: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'date_finished'
		},
		durationExpected: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'duration_expected'
		},
		duration: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'duration'
		},
		durationUnit: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'duration_unit'
		},
		durationPercent: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'duration_percent'
		},
		operationId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'mrp_routing_workcenter',
				key: 'id'
			},
			field: 'operation_id'
		},
		finalLotId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'stock_production_lot',
				key: 'id'
			},
			field: 'final_lot_id'
		},
		nextWorkOrderId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'mrp_workorder',
				key: 'id'
			},
			field: 'next_work_order_id'
		},
		productionDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'production_date'
		},
		capacity: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'capacity'
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
		tableName: 'mrp_workorder',
		timestamps: false
	});
};
