const Forest = require("../models/ForestModel");
const mongoose = require('mongoose')

//get all forests
const getForests = async (req, res) => {
    const forests = await Forest.find({}).sort({createdAt: -1})

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
    
      //add doc to database
      try {
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
          fungi
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