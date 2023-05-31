const router = require("express").Router();
const User = require("../models/User");


//check existing reaction (like)
router.post("reactions/get"), async (req, res) => {
    const { user_id } =  req.body.userId;
    if(!user_id) {
        res.status(200).json('Not found');
    }
    try{ 
     const getReaction = await User.findOne(user_id)
     (getReaction && getReaction.length) 
        res.status.json({ ...getReaction[0]});
    } catch (err){
        res.status(500).json(err)
    }
}

//create reaction
router.post("reactions/create"), async (req, res) => {
    const { user_id } = req.body.userId;
    if(!user_id) {
        res.status(200).json('Cannot create the post reaction, please try again');
    }
    const reactions = user_id;
    const insertReaction = await User.create(req.params.id);
    if (insertReaction) {
        res.status(200).json({ insertId: reactions.insertId, user_id: userId });
    } else {
        res.status(403).json('Cannot create the post reaction, please try again');
    }
}

//delete reaction
router.delete(":/id"), async (req, res) => {
    if(req.body.userId === req.params.id) {
        try{
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("Post reaction has beeen deleted")
        } catch (err) {
            return res.status(500).json(err)
        }
    } else { 
        return res.status(403).json("Only one post reaction can be deleted at a time")
    }
}

module.exports = router
