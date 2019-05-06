/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('resGroups', {
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
		comment: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'comment'
		},
		categoryId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'ir_module_category',
				key: 'id'
			},
			unique: true,
			field: 'category_id'
		},
		color: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'color'
		},
		share: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'share'
		},
		isPortal: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'is_portal'
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
		tableName: 'res_groups',
		timestamps: false
	});
};
