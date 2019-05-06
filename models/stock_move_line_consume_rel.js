/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('stockMoveLineConsumeRel', {
		consumeLineId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'stock_move_line',
				key: 'id'
			},
			unique: true,
			field: 'consume_line_id'
		},
		produceLineId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'stock_move_line',
				key: 'id'
			},
			field: 'produce_line_id'
		}
	}, {
		tableName: 'stock_move_line_consume_rel',
		timestamps: false
	});
};
