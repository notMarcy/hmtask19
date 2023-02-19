const fs = require('fs');
const lodash = require('lodash');

const htmlCreating = () => {
    var html = `
        <!DOCTYPE html>
        <html>
            <head>
	            <title></title>
	            <meta charset="utf-8">
	            <meta name="viewport" content="width=device-width, initial-scale=1.0">
	            <link rel="stylesheet" type="text/css" href="style.css">
            </head>
            <body>
	            <script type="text/javascript" src="script.js"></script>
            </body>
        </html>
    `;
    fs.mkdirSync('./files', (error) => error ? console.log(error) : null)
    fs.writeFileSync('./files/index.html', html, (error) => {
        error ? console.log(error) : null
      })

      cssCreating();
}

const cssCreating = () => {
    var cssStyle = `
        *{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }
    `;

    fs.mkdirSync('./files/css', (error) => error ? console.log(error) : null)
    fs.writeFileSync('./files/css/style.css', cssStyle, (error) =>
        error ? console.log(error) : null
    )

    fileDeleting();
}

const fileDeleting = () => {
    setTimeout(() => {
        fs.unlink('./files/index.html', (error) => error ? console.log(error) : null)
        fs.unlink('./files/css/style.css', (error) => error ? console.log(error) : null)
        fs.rmdir('./files/css', (error) => error ? console.log(error) : null)
    }, 7000);

    dopLodash();
}

const dopLodash = () => {
    var js = `
const lodash = require('lodash');

const lodashFunc = () => {
        var a = [undefined,'peugion', 67, 42, 'apple', null];
        var b = [undefined, 45, 67, 'gray', 0, 'pineapple', 1, true,'good luck'];
        console.log(lodash.compact(a));
        console.log(lodash.compact(b));
        console.log(lodash.difference(a,b));
        console.log(lodash.xor(a,b));
}

lodashFunc();
    `; 

    fs.writeFileSync('./script.js', js, (error) =>
        error ? console.log(error) : null
    )
}

htmlCreating();


