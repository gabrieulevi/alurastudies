import NotFound from '../errors/NotFound.js';
// import { author } from '../models/Author.js';
// import book from '../models/Book.js';
class fetchElement{
    static fetchElementById(req, next, collection){
        const id = req.params.id;
        const element = collection.findById(id);
        let response = {
            element : element,
            status : 404      
        };
        if (!response.element) {
            console.log(response.element);
            next(new NotFound(`${collection} element not found`));
        } else {
            return(response);
        }
    }
}
export default fetchElement;