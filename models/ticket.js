var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ticketSchema = new Schema(
	{
		busCo: {
			require: true,
			type: String,
			enum: ['Greyhound', 'Megabus', 'RedCoach'],
		},
		BusNo: {
			require: true,
			type: Number,
			min: 10,
			max: 9990,
		},
		departs: {
			require: true,
			type: Number,
			default: function () {
				return new Date().toLocaleDateString();
			},
		},
	},
	{
		timestamps: true,
	},
);
