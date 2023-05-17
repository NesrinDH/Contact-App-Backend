const express = require('express')
const router = express.Router()
const ContactController = require('../Controllers/ContactController')

router.post('/ajouter', ContactController.ajouterContact)
router.post('/:id/modifier', ContactController.modifierContact)
router.get('/:id/supprimer', ContactController.supprimContact)
router.get('/lister', ContactController.listerContact)

module.exports= router;