/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('zipSearch', {
		zipSearchId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'br_zip_search',
				key: 'id'
			},
			unique: true,
			field: 'zip_search_id'
		},
		zipId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'br_zip_result',
				key: 'id'
			},
			field: 'zip_id'
		}
	}, {
		tableName: 'zip_search',
		timestamps: false
	});
};
