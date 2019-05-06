/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('invoiceEletronicInutilized', {
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
		numerationStart: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'numeration_start'
		},
		numerationEnd: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'numeration_end'
		},
		justificativa: {
			type: DataTypes.TEXT,
			allowNull: false,
			field: 'justificativa'
		},
		erro: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'erro'
		},
		state: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'state'
		},
		modelo: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'modelo'
		},
		serie: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'br_account_document_serie',
				key: 'id'
			},
			field: 'serie'
		},
		code: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'code'
		},
		motive: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'motive'
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
		tableName: 'invoice_eletronic_inutilized',
		timestamps: false
	});
};
