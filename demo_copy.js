const fs = require ( 'fs' );

fs.copyFile( ('file1.txt','file3.txt') , ('file2.txt', 'file3.txt') , (err) => {
    if (err) {
        throw err;
    }

    console.log( 'File is copied!' );
})