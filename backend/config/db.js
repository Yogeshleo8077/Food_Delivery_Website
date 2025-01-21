import mongoose from 'mongoose';

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://yogeshleo420:1234567yy@cluster0.dfnbrsn.mongodb.net/Food_DeliveryWebsite').then(() => console.log("DB Connected"));
}