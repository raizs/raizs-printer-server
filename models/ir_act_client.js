/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('irActClient', {
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
		type: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'type'
		},
		help: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'help'
		},
		bindingModelId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'ir_model',
				key: 'id'
			},
			field: 'binding_model_id'
		},
		bindingType: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'binding_type'
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
		tag: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'tag'
		},
		target: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'target'
		},
		resModel: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'res_model'
		},
		context: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'context'
		},
		paramsStore: {
			type: "BYTEA",
			allowNull: true,
			field: 'params_store'
		}
	}, {
		tableName: 'ir_act_client',
		timestamps: false
	});
};
