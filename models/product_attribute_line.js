/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('productAttributeLine', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		productTmplId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'product_template',
				key: 'id'
			},
			field: 'product_tmpl_id'
		},
		attributeId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'product_attribute',
				key: 'id'
			},
			field: 'attribute_id'
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
		tableName: 'product_attribute_line',
		timestamps: false
	});
};
