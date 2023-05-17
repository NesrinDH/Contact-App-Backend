const ContactModel= require('../Models/Contact')

//fonction ajouter des contacts...............................
exports.ajouterContact =(req, res) => {
    //les traitements nécessaires d'ajout du contact
    const contactObj = {
        nom: req.body.nom,
        numero: req.body.numero
    }
    const contact = new ContactModel(contactObj)
    //insert data into database with save
    contact.save((error, createdContact)=>{
        if(error) return res.status(400).json({error})
        if(createdContact) return res.status(200).json({createdContact})
    })
    //res.status(200).json({"message":"donnée ajoutée avec succés"})
}
//fonction modifier des contacts...............................
exports.modifierContact = (req, res) => {
    //les traitements nécessaires de modif du contact
    const modifObj = {
        nom: req.body.nom,
        numero: req.body.numero
    }
    const id= req.params.id;
    ContactModel.findByIdAndUpdate(id, modifObj).exec((error, contactUpdated) =>{
        if(error) return res.status(400).json({error})
        if(contactUpdated) return res.status(200).json({contactUpdated})
        })
    //res.json({"message":"on veut ajouter un contact"})
}
//fonction supprimer des contacts...............................
exports.supprimContact = (req, res) => {
    //les traitements nécessaires pour supprimer du contact
    const id= req.params.id;
    ContactModel.findByIdAndDelete(id).exec((error, contactDeleted) =>{
        if(error) return res.status(400).json({error})
        if(contactDeleted) return res.status(200).json({"message": "contact deleted successfuly"})
        })
    //res.json({"message":"on veut ajouter un contact"})
}
//fonction afficher des contacts...............................
exports.listerContact = (req, res) => {
    //les traitements nécessaires de lister des contacts
    ContactModel.find({}).exec((error, contactList)=>{
     if(error) return res.status(400).json({error})
     if(contactList) return res.status(200).json({contactList})
    })
    
    //res.json({"message":"on veut ajouter un contact"})
  
}
