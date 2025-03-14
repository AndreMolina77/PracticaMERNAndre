import { Schema, model } from "mongoose";

const reviewsSchema = newSchema(
    {
        comment:{
            type: String
        },
        rating:{
            type: Number,
            max: 5,
            min: 0
        },
        idCliente:{
            type: Schema.Types.ObjectId,
            ref: "Cliente",
            require: true
    },
},
{
    timestamps: true,
    strict: false
}
);

export default model("Reviews", reviewsSchema);