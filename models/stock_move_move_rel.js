/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('stockMoveMoveRel', {
		moveOrigId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'stock_move',
				key: 'id'
			},
			unique: true,
			field: 'move_orig_id'
		},
		moveDestId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'stock_move',
				key: 'id'
			},
			field: 'move_dest_id'
		}
	}, {
		tableName: 'stock_move_move_rel',
		timestamps: false
	});
};
