/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('irModelFields', {
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
			primaryKey: true,
			field: 'name'
		},
		completeName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'complete_name'
		},
		model: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			field: 'model'
		},
		relation: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'relation'
		},
		relationField: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'relation_field'
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
		fieldDescription: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'field_description'
		},
		help: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'help'
		},
		ttype: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'ttype'
		},
		selection: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'selection'
		},
		copy: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'copy'
		},
		related: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'related'
		},
		required: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'required'
		},
		readonly: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'readonly'
		},
		index: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'index'
		},
		translate: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'translate'
		},
		size: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'size'
		},
		state: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'state'
		},
		onDelete: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'on_delete'
		},
		domain: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'domain'
		},
		selectable: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'selectable'
		},
		relationTable: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'relation_table'
		},
		column1: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'column1'
		},
		column2: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'column2'
		},
		compute: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'compute'
		},
		depends: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'depends'
		},
		store: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'store'
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
		trackVisibility: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'track_visibility'
		}
	}, {
		tableName: 'ir_model_fields',
		timestamps: false
	});
};
