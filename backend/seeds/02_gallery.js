const models = require('../models');
const Gallery = models.Gallery
const faker = require('faker')

Gallery.create({
    link: 'http//image.com',
    title:'Super title',
    describe:'a very very very long describe for test'
})

.then((Gallery) => {console.log(Gallery)})
.catch((error) => {console.log(error)});

Gallery.findByPk(1)
.then((Gallery) => {console.log(Gallery)})
.catch((error) => {console.log(error)})