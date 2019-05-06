/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('productFiscalClassificationWizard', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		productFiscalClassCsv: {
			type: "BYTEA",
			allowNull: true,
			field: 'product_fiscal_class_csv'
		},
		ncmCsvDelimiter: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'ncm_csv_delimiter'
		},
		hasQuoteChar: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'has_quote_char'
		},
		ncmQuoteChar: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'ncm_quote_char'
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
		tableName: 'product_fiscal_classification_wizard',
		timestamps: false
	});
};
