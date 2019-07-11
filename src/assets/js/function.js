import * as FilePond from 'filepond';

const inputElement = document.querySelector('input[type="file"]');
const filepondTest = FilePond.create(
    inputElement,
    {

    }
);

FilePond.setOptions( {
   server: 'test/'
});