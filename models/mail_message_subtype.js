/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('mailMessageSubtype', {
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
		description: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'description'
		},
		internal: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'internal'
		},
		parentId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'mail_message_subtype',
				key: 'id'
			},
			field: 'parent_id'
		},
		relationField: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'relation_field'
		},
		resModel: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'res_model'
		},
		default: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'default'
		},
		sequence: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'sequence'
		},
		hidden: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'hidden'
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
		tableName: 'mail_message_subtype',
		timestamps: false
	});
};
