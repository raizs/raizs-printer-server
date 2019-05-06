/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('linkTrackerCode', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		code: {
			type: DataTypes.STRING,
			allowNull: true,
			unique: true,
			field: 'code'
		},
		linkId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'link_tracker',
				key: 'id'
			},
			field: 'link_id'
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
		tableName: 'link_tracker_code',
		timestamps: false
	});
};
