/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('irSequenceDateRange', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		dateFrom: {
			type: DataTypes.DATEONLY,
			allowNull: false,
			field: 'date_from'
		},
		dateTo: {
			type: DataTypes.DATEONLY,
			allowNull: false,
			field: 'date_to'
		},
		sequenceId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'ir_sequence',
				key: 'id'
			},
			field: 'sequence_id'
		},
		numberNext: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'number_next'
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
		tableName: 'ir_sequence_date_range',
		timestamps: false
	});
};
