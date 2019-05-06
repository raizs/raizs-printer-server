/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('raizsFinishedPickingWiz', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		saleId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'sale_order',
				key: 'id'
			},
			field: 'sale_id'
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
		tableName: 'raizs_finished_picking_wiz',
		timestamps: false
	});
};
