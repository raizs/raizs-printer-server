/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountFiscalPositionAccountTemplate', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		positionId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_fiscal_position_template',
				key: 'id'
			},
			field: 'position_id'
		},
		accountSrcId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_account_template',
				key: 'id'
			},
			field: 'account_src_id'
		},
		accountDestId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_account_template',
				key: 'id'
			},
			field: 'account_dest_id'
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
		tableName: 'account_fiscal_position_account_template',
		timestamps: false
	});
};
