/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountMoveLineReconcile', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		transNbr: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'trans_nbr'
		},
		credit: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'credit'
		},
		debit: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'debit'
		},
		writeoff: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'writeoff'
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
		tableName: 'account_move_line_reconcile',
		timestamps: false
	});
};
