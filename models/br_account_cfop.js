/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('brAccountCfop', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		code: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			field: 'code'
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'name'
		},
		smallName: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'small_name'
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'description'
		},
		type: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'type'
		},
		parentId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'br_account_cfop',
				key: 'id'
			},
			field: 'parent_id'
		},
		internalType: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'internal_type'
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
		tableName: 'br_account_cfop',
		timestamps: false
	});
};
