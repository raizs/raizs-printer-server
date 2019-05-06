/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('irFilters', {
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
			unique: true,
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
		},
		domain: {
			type: DataTypes.TEXT,
			allowNull: false,
			field: 'domain'
		},
		context: {
			type: DataTypes.TEXT,
			allowNull: false,
			field: 'context'
		},
		sort: {
			type: DataTypes.TEXT,
			allowNull: false,
			field: 'sort'
		},
		modelId: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true,
			field: 'model_id'
		},
		isDefault: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'is_default'
		},
		actionId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			primaryKey: true,
			field: 'action_id'
		},
		active: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'active'
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
		tableName: 'ir_filters',
		timestamps: false
	});
};
