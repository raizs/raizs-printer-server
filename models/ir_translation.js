/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('irTranslation', {
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
		resId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'res_id'
		},
		lang: {
			type: DataTypes.STRING,
			allowNull: true,
			references: {
				model: 'res_lang',
				key: 'code'
			},
			field: 'lang'
		},
		type: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'type'
		},
		src: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'src'
		},
		value: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'value'
		},
		module: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'module'
		},
		state: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'state'
		},
		comments: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'comments'
		}
	}, {
		tableName: 'ir_translation',
		timestamps: false
	});
};
