import { connectMongoDB } from "@/lib/MongoConnect";
import bookings from '../../models/BookingModel'

export default async function handler(req, res) {
    if(req.method !== "POST"){
        res.status(405).send({msg:"Only Post requests are allowed"})
        return;
    }

    const {
            fromDate:fromThisDay,
            toDate:toThisDay,
            house:houseName,
            user:parsedDetails,
            amount:amountTotal,
            totalDays:noOfDays,
            houseId
    } = req.body;

    try{

        await connectMongoDB()
        bookings.create({fromDate:fromThisDay,
            toDate:toThisDay,
            house:houseName,
            user:parsedDetails,
            amount:amountTotal,
            totalDays:noOfDays,
            houseId}).then((data)=>{
            console.log(data);
            res.status(201).send(data)
        })

    }catch(err){
        console.error(err)
        res.status(400).send({err, msg:"Something went wrong"})

    }
  }