import mongoose from 'mongoose';

mongoose.Schema.Types.Subdocument('validate', {
    validator: (value) => value !== '',
    message : 'an empty field was submited'
});
