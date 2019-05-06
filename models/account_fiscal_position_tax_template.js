/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountFiscalPositionTaxTemplate', {
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
		taxSrcId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_tax_template',
				key: 'id'
			},
			field: 'tax_src_id'
		},
		taxDestId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_tax_template',
				key: 'id'
			},
			field: 'tax_dest_id'
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
		tableName: 'account_fiscal_position_tax_template',
		timestamps: false
	});
};
