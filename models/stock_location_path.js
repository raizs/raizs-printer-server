/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('stockLocationPath', {
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
		companyId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_company',
				key: 'id'
			},
			field: 'company_id'
		},
		routeId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'stock_location_route',
				key: 'id'
			},
			field: 'route_id'
		},
		locationFromId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'stock_location',
				key: 'id'
			},
			field: 'location_from_id'
		},
		locationDestId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'stock_location',
				key: 'id'
			},
			field: 'location_dest_id'
		},
		delay: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'delay'
		},
		pickingTypeId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'stock_picking_type',
				key: 'id'
			},
			field: 'picking_type_id'
		},
		auto: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'auto'
		},
		propagate: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'propagate'
		},
		active: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'active'
		},
		warehouseId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'stock_warehouse',
				key: 'id'
			},
			field: 'warehouse_id'
		},
		routeSequence: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'route_sequence'
		},
		sequence: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'sequence'
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
		tableName: 'stock_location_path',
		timestamps: false
	});
};
