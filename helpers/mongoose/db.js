import mongoose from 'mongoose';

export async function connectToDb(){
    if(mongoose.connection.readyState >= 1) return;

    return mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.jtp5b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true
    });
}