/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('stockReturnPicking', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		pickingId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'stock_picking',
				key: 'id'
			},
			field: 'picking_id'
		},
		moveDestExists: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'move_dest_exists'
		},
		originalLocationId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'stock_location',
				key: 'id'
			},
			field: 'original_location_id'
		},
		parentLocationId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'stock_location',
				key: 'id'
			},
			field: 'parent_location_id'
		},
		locationId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'stock_location',
				key: 'id'
			},
			field: 'location_id'
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
		tableName: 'stock_return_picking',
		timestamps: false
	});
};
