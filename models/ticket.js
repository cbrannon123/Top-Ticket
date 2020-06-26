var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ticketSchema = new Schema(
	{
		busCo: {
			
			type: String,
			enum: ['Greyhound', 'Megabus', 'RedCoach'],
		},
		busNo: {
			
			type: Number,
			min: 10,
			max: 9990,
		},
		departs: {
		
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
module.exports = mongoose.model('Ticket', ticketSchema);