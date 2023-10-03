import BadRequest from '../errors/BadRequest.js';
async function paginate(req, res, next){
    try {
        const result = req.result;
        let {limit = 5, pages = 1, sequence = '_id:-1'} = req.query;
        limit = parseInt(limit);
        pages = parseInt(pages);
        let [sortField, order] = sequence.split(':');
        order = parseInt(order);
        if (limit > 0 && pages > 0){
            const bookList = await result.find()
                .sort({ [sortField]: order })
                .skip((pages - 1) * limit)
                .limit(limit)
                .exec();
            res.status(200).json(bookList);
        } else {
            next(new BadRequest());
        }   
    } catch (error) {
        next(error);
    }
}

export default paginate;