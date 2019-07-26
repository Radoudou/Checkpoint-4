const models = require('../models');
const Performance = models.Performance;

module.exports = {
    index: function (req, res, next) {
        Performance.findAll()
            .then((performances) => { console.log(res.json({ performances })) })
            .catch((error) => res.status(500).json({ error }));
    },
    show: function (req, res, next) {
        Performance.findByPk(req.params.id)
            .then((performance) => { console.log(res.json({ performance })) })
            .catch((error) => res.status(500).json({ error }));
    },
    create: function (req, res, next) {
        Performance.create({
            cover: req.body.cover,
            title: req.body.title,
            describe: req.body.describe
        })
            .then((performance) => { console.log(res.json({ performance })) })
            .catch((error) => res.status(500).json({ error }));
    },
    update: function (req, res, next) {
        Performance.findByPk(req.params.id)
            .then((performance) => {
                performance.update({
                    cover: req.body.cover,
                    title: req.body.title,
                    describe: req.body.describe
                })
                    .then((updatedPerformance) => { res.json({ performance: updatedPerformance }) })
                    .catch((error) => res.status(500).json({ error }));
            })
            .catch((error) => res.status(500).json({ error }));

    },
    delete: function (req, res, next) {
        Performance.findByPk(req.params.id)
            .then((performance) => {
                performance.destroy()
                    .then((performance) => { res.json({ message:'Has been deleted with succes' }) })
                    .catch((error) => res.status(500).json({ error }));
            })
            .catch((error) => res.status(500).json({ error }));
    }
}