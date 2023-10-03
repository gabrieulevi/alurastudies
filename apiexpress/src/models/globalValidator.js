import mongoose from 'mongoose';

mongoose.Schema.Types.String.set('validate', {
    validator: (value) => {
        console.log(value);
        return value !== '';
    } 
    
    ,
    message : ({ path }) => `the path ${path} was sent in blank`
});


