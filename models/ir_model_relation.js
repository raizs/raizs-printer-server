/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('irModelRelation', {
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
		model: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'ir_model',
				key: 'id'
			},
			field: 'model'
		},
		module: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'ir_module_module',
				key: 'id'
			},
			field: 'module'
		},
		dateUpdate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'date_update'
		},
		dateInit: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'date_init'
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
		tableName: 'ir_model_relation',
		timestamps: false
	});
};
