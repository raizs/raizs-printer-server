/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountAccount', {
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
		currencyId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_currency',
				key: 'id'
			},
			field: 'currency_id'
		},
		code: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			field: 'code'
		},
		deprecated: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'deprecated'
		},
		userTypeId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_account_type',
				key: 'id'
			},
			field: 'user_type_id'
		},
		internalType: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'internal_type'
		},
		lastTimeEntriesChecked: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'last_time_entries_checked'
		},
		reconcile: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'reconcile'
		},
		note: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'note'
		},
		companyId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'res_company',
				key: 'id'
			},
			field: 'company_id'
		},
		groupId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_group',
				key: 'id'
			},
			field: 'group_id'
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
		},
		accountType: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'account_type'
		}
	}, {
		tableName: 'account_account',
		timestamps: false
	});
};
