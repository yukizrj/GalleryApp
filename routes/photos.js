const photoRoutes = (app, fs) => {

    // variables
    const dataPath = './data/db.json';

    // refactored helper methods
    const readFile = (callback, returnJson = false, filePath = dataPath, encoding = 'utf8') => {
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
                throw err;
            }

            callback(returnJson ? JSON.parse(data) : data);
        });
    };

   const writeFile = (fileData, callback, filePath = dataPath, encoding = 'utf8') => {

        fs.writeFile(filePath, fileData, encoding, (err) => {
            if (err) {
                throw err;
            }

            callback();
        });
    };

    // READ
    app.get('/photos', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            res.send(JSON.parse(data));
        });
    });

    // CREATE
    app.post('/newPhoto', (req, res) => {
        readFile(data => {
            //give id to new photo object and add to datalist
            const photos = data.photos;
            const newId = photos.length;
            const temp = req.body;
            temp.id = newId;
            photos[newId] = temp;
            data.photos = photos;

            writeFile(JSON.stringify(data, null, 2), () => {
                res.status(200).send('new photo added');
            });
        },
            true);
    });
};

module.exports = photoRoutes;