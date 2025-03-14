const reviewsController = {};
import reviewsModel from "../models/Reviews.js"

//SELECT (ya es por ID, así que no se tiene que hacer otra solo para ID)
reviewsController.getReviews = async (req, res) => {
    const reviews = await reviewsModel.find().populate('idCliente')
    res.json(reviews);
};

//INSERT
reviewsController.createReviews = async (req, res) => {
    const  { comment, rating, idCliente} = req.body;
    const newRating = new reviewsModel({comment, rating, idCliente})
    await newRating.save;
    res.json({message: "Reseña guardada"})
};


//DELETE
reviewsController.deleteReviews = async (res, req) => {
    const deleteReview = await reviewsModel.findByIdAndDelete(req.params.id)
    res.json({message: "Reseña eliminada"});
};

//UPDATE
reviewsController.updateReviews = async(res, req) => {
    const { comment, rating, idCliente} = req.body;
    const updateReviews = await reviewsModel.findByIdAndUpdate(
        req.params.id,
        { comment, rating, idCliente},
        { new: true}
    )

    res.json({message: "Reseña actualizada"})
};

