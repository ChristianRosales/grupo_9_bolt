const controller = {
    index: (req, res) => {
        res.render('index', { title: 'Express' });
    }
}

module.exports = controller;