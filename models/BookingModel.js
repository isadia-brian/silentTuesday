import mongoose from 'mongoose'

const bookingSchema  =  mongoose.Schema({


    house:{
        type:String, 
        required:true
    },
    houseId:{
        type:String,
        required:true
    },
    user:{
        type:String,
        required:true
    },
    fromDate:{
        type:String,
        required:true
    },
    toDate:{
        type:String,
        required:true
        },
    amount:{
        type:Number,
        required:true
    },
    totalDays:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        required:true,
        default:"booked"
        },


},{
    timestamps:true
})

const bookingModel = mongoose.model('bookings', bookingSchema);

module.exports = bookingModel