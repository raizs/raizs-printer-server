/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('raizsPickingSalesSelector', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		barcode: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'barcode'
		},
		locationId: {
			type: DataTypes.INTEGER,
			allowNull: true,
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
		tableName: 'raizs_picking_sales_selector',
		timestamps: false
	});
};
