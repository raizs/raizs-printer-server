/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('brAccountFiscalObservation', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		sequence: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'sequence'
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'name'
		},
		message: {
			type: DataTypes.TEXT,
			allowNull: false,
			field: 'message'
		},
		tipo: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'tipo'
		},
		documentId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'br_account_fiscal_document',
				key: 'id'
			},
			field: 'document_id'
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
		tableName: 'br_account_fiscal_observation',
		timestamps: false
	});
};
