const models = require('../models');
const Performance = models.Performance
const faker = require('faker')

Performance.create({
    cover: 'http//image.com',
    title:'Super title',
    describe:'a very very very long describe for test'
})

.then((performance) => {console.log(performance)})
.catch((error) => {console.log(error)});

Performance.findByPk(1)
.then((performance) => {console.log(performance)})
.catch((error) => {console.log(error)})