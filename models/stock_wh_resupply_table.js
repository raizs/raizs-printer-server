/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('stockWhResupplyTable', {
		suppliedWhId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'stock_warehouse',
				key: 'id'
			},
			unique: true,
			field: 'supplied_wh_id'
		},
		supplierWhId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'stock_warehouse',
				key: 'id'
			},
			field: 'supplier_wh_id'
		}
	}, {
		tableName: 'stock_wh_resupply_table',
		timestamps: false
	});
};
