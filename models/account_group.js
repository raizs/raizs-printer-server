/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountGroup', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		parentLeft: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'parent_left'
		},
		parentRight: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'parent_right'
		},
		parentId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_group',
				key: 'id'
			},
			field: 'parent_id'
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'name'
		},
		codePrefix: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'code_prefix'
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
		tableName: 'account_group',
		timestamps: false
	});
};
