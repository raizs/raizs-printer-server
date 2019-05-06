/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('mailActivityType', {
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
		summary: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'summary'
		},
		sequence: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'sequence'
		},
		days: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'days'
		},
		icon: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'icon'
		},
		resModelId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'ir_model',
				key: 'id'
			},
			field: 'res_model_id'
		},
		category: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'category'
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
		tableName: 'mail_activity_type',
		timestamps: false
	});
};
