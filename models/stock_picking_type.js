/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('stockPickingType', {
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
		color: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'color'
		},
		sequence: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'sequence'
		},
		sequenceId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'ir_sequence',
				key: 'id'
			},
			field: 'sequence_id'
		},
		defaultLocationSrcId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'stock_location',
				key: 'id'
			},
			field: 'default_location_src_id'
		},
		defaultLocationDestId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'stock_location',
				key: 'id'
			},
			field: 'default_location_dest_id'
		},
		code: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'code'
		},
		returnPickingTypeId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'stock_picking_type',
				key: 'id'
			},
			field: 'return_picking_type_id'
		},
		showEntirePacks: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'show_entire_packs'
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
		active: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'active'
		},
		useCreateLots: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'use_create_lots'
		},
		useExistingLots: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'use_existing_lots'
		},
		showOperations: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'show_operations'
		},
		showReserved: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'show_reserved'
		},
		barcodeNomenclatureId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'barcode_nomenclature',
				key: 'id'
			},
			field: 'barcode_nomenclature_id'
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
		tableName: 'stock_picking_type',
		timestamps: false
	});
};
