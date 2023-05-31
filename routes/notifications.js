const router = require("express").Router();
const User = require("../models/User");


//Create notification
router.post('notifications/create', async (req, res) => {
    const { profilePicture, notificationMessage, userId } = req.body;
    if (!profilePicture || !notificationMessage || !userId) {
        res.status(200).json('Cannot create the notification, please try again')
    }
    const createNotification = await [[profile_Picture, notification_Message, user_Id]];
    const insertNotification = await User.create({ profilePicture, notificationMessage, user_id })
    if (insertNotification) {
        res.status(200).json({ id: createNotification.insertId, profile_Picture: profilePicture, notification_message: notificationMessage})
    } else {
        res.status(200).json('Cannot create the notification please try again')
    }
})

//get notification by UserId
router.get('/notifications/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        const { insertNotification } = user._doc
        res.status(200).json(insertNotification)
    } catch(err) {
        res.status(500).json(err)
    }
})

module.exports = router