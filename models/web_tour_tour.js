/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('webTourTour', {
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
		userId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_users',
				key: 'id'
			},
			field: 'user_id'
		}
	}, {
		tableName: 'web_tour_tour',
		timestamps: false
	});
};
