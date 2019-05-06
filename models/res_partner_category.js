/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('resPartnerCategory', {
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
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'name'
		},
		color: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'color'
		},
		parentId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_partner_category',
				key: 'id'
			},
			field: 'parent_id'
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
		tableName: 'res_partner_category',
		timestamps: false
	});
};
