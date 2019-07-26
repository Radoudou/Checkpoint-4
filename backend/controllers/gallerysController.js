const models = require('../models');
const Gallery = models.Gallery;

module.exports = {
    index: function (req, res, next) {
        Gallery.findAll()
            .then((gallerys) => { console.log(res.json({ gallerys })) })
            .catch((error) => res.status(500).json({ error }));
    },
    show: function (req, res, next) {
        Gallery.findByPk(req.params.id)
            .then((gallery) => { console.log(res.json({ gallery })) })
            .catch((error) => res.status(500).json({ error }));
    },
    create: function (req, res, next) {
        Gallery.create({
            link: req.body.link,
            title: req.body.title,
            describe: req.body.title
        })
            .then((gallery) => { console.log(res.json({ gallery })) })
            .catch((error) => res.status(500).json({ error }));
    },
    update: function (req, res, next) {
        Gallery.findByPk(req.params.id)
            .then((gallery) => {
                gallery.update({
                    link: req.body.link,
                    title: req.body.title,
                    describe: req.body.describe
                })
                    .then((updatedgallery) => { res.json({ gallery: updatedgallery }) })
                    .catch((error) => res.status(500).json({ error }));
            })
            .catch((error) => res.status(500).json({ error }));

    },
    delete: function (req, res, next) {
        Gallery.findByPk(req.params.id)
            .then((gallery) => {
                gallery.destroy()
                    .then((gallery) => { res.json({ message: 'Has been deleted with succes' }) })
                    .catch((error) => res.status(500).json({ error }));
            })
            .catch((error) => res.status(500).json({ error }));
    }
}