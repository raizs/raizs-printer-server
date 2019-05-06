/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('irActWindow', {
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
		viewId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'ir_ui_view',
				key: 'id'
			},
			field: 'view_id'
		},
		domain: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'domain'
		},
		context: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'context'
		},
		resId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'res_id'
		},
		resModel: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'res_model'
		},
		srcModel: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'src_model'
		},
		target: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'target'
		},
		viewMode: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'view_mode'
		},
		viewType: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'view_type'
		},
		usage: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'usage'
		},
		limit: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'limit'
		},
		searchViewId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'ir_ui_view',
				key: 'id'
			},
			field: 'search_view_id'
		},
		filter: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'filter'
		},
		autoSearch: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'auto_search'
		},
		multi: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'multi'
		}
	}, {
		tableName: 'ir_act_window',
		timestamps: false
	});
};
