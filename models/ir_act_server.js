/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('irActServer', {
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
		usage: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'usage'
		},
		state: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'state'
		},
		sequence: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'sequence'
		},
		modelId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'ir_model',
				key: 'id'
			},
			field: 'model_id'
		},
		modelName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'model_name'
		},
		code: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'code'
		},
		crudModelId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'ir_model',
				key: 'id'
			},
			field: 'crud_model_id'
		},
		linkFieldId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'ir_model_fields',
				key: 'id'
			},
			field: 'link_field_id'
		},
		templateId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'mail_template',
				key: 'id'
			},
			field: 'template_id'
		}
	}, {
		tableName: 'ir_act_server',
		timestamps: false
	});
};
