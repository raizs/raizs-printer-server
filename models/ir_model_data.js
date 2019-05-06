/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('irModelData', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
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
		writeDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'write_date'
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
		noupdate: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'noupdate'
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'name'
		},
		dateInit: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'date_init'
		},
		dateUpdate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'date_update'
		},
		module: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'module'
		},
		model: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'model'
		},
		resId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'res_id'
		},
		studio: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'studio'
		}
	}, {
		tableName: 'ir_model_data',
		timestamps: false
	});
};
