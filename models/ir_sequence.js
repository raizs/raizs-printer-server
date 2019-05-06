/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('irSequence', {
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
		code: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'code'
		},
		implementation: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'implementation'
		},
		active: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'active'
		},
		prefix: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'prefix'
		},
		suffix: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'suffix'
		},
		numberNext: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'number_next'
		},
		numberIncrement: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'number_increment'
		},
		padding: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'padding'
		},
		companyId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_company',
				key: 'id'
			},
			field: 'company_id'
		},
		useDateRange: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'use_date_range'
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
		tableName: 'ir_sequence',
		timestamps: false
	});
};
