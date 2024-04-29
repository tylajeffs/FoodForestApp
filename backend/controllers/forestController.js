const Forest = require("../models/ForestModel");
const mongoose = require('mongoose')

//get all forests
const getForests = async (req, res) => {
    const user_id = req.user._id
    const forests = await Forest.find({ user_id }).sort({createdAt: -1})

    res.status(200).json(forests)
}

//get a single forest
const getForest = async (req, res) => {
    const { id } = req.params 

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "no such forest"})
    }

    const forest = await Forest.findById(id)

    if(!forest) {
        return res.status(404).json({error: "no such forest"})
    }

    res.status(200).json(forest)
}

//create a new forest
const createForest = async (req, res) => {
    const {
        title,
        ecoregion,
        canopy,
        subCanopy,
        shrub,
        herb,
        groundCover,
        underground,
        vine,
        fungi,
      } = req.body;

      let emptyFields = []

      if(!title) {
        emptyFields.push('title')
      }
      if(!ecoregion) {
        emptyFields.push('ecoregion')
      }
      if(!canopy) {
        emptyFields.push('canopy')
      }
      if(!subCanopy) {
        emptyFields.push('subCanopy')
      }
      if(!shrub) {
        emptyFields.push('shrub')
      }
      if(!herb) {
        emptyFields.push('herb')
      }
      if(!groundCover) {
        emptyFields.push('groundCover')
      }
      if(!underground) {
        emptyFields.push('underground')
      }
      if(!vine) {
        emptyFields.push('vine')
      }
    
      if(emptyFields.length >0) {
        return res.status(400).json({error: "please fill in all the fields", emptyFields})
      }

      //add doc to database
      try {
        const user_id = req.user._id

        const forest = await Forest.create({
          title,
          ecoregion,
          canopy,
          subCanopy,
          shrub,
          herb,
          groundCover,
          underground,
          vine,
          fungi, 
          user_id
        });
    
        res.status(200).json(forest);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
}


//delete a forest

const deleteForest =  async (req, res) => {
    const { id } = req.params 

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "no such forest"})
    }

    const forest = await Forest.findOneAndDelete({_id: id})

    if(!forest) {
        return res.status(404).json({error: "no such forest"})
    }

    res.status(200).json(forest)

}

//update a forest
const updateForest = async (req, res) => {
    const { id } = req.params 

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "no such forest"})
    }

    const forest = await Forest.findOneAndUpdate({_id: id},{
        ...req.body
    })

    if(!forest) {
        return res.status(404).json({error: "no such forest"})
    }

    res.status(200).json(forest)
}

//export
module.exports = {
    getForests, 
    getForest,
    createForest, 
    deleteForest, 
    updateForest
}