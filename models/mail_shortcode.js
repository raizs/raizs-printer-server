/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('mailShortcode', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		source: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'source'
		},
		unicodeSource: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'unicode_source'
		},
		substitution: {
			type: DataTypes.TEXT,
			allowNull: false,
			field: 'substitution'
		},
		description: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'description'
		},
		shortcodeType: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'shortcode_type'
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
		tableName: 'mail_shortcode',
		timestamps: false
	});
};
