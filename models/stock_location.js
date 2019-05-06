/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('stockLocation', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		parentLeft: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'parent_left'
		},
		parentRight: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'parent_right'
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'name'
		},
		completeName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'complete_name'
		},
		active: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'active'
		},
		usage: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'usage'
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
		partnerId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_partner',
				key: 'id'
			},
			field: 'partner_id'
		},
		comment: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'comment'
		},
		posx: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'posx'
		},
		posy: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'posy'
		},
		posz: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'posz'
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
		scrapLocation: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'scrap_location'
		},
		returnLocation: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'return_location'
		},
		removalStrategyId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'product_removal',
				key: 'id'
			},
			field: 'removal_strategy_id'
		},
		putawayStrategyId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'product_putaway',
				key: 'id'
			},
			field: 'putaway_strategy_id'
		},
		barcode: {
			type: DataTypes.STRING,
			allowNull: true,
			unique: true,
			field: 'barcode'
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
		valuationInAccountId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_account',
				key: 'id'
			},
			field: 'valuation_in_account_id'
		},
		valuationOutAccountId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_account',
				key: 'id'
			},
			field: 'valuation_out_account_id'
		},
		vtexId: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'vtex_id'
		},
		vtexWarehouseId: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'vtex_warehouse_id'
		},
		stockType: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'stock_type'
		}
	}, {
		tableName: 'stock_location',
		timestamps: false
	});
};
