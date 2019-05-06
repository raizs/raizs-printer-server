/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('irModuleCategory', {
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
		parentId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'ir_module_category',
				key: 'id'
			},
			field: 'parent_id'
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'name'
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'description'
		},
		sequence: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'sequence'
		},
		visible: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'visible'
		},
		exclusive: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'exclusive'
		}
	}, {
		tableName: 'ir_module_category',
		timestamps: false
	});
};
