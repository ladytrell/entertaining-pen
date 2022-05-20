const router = require("express").Router();
const { Tag, Band } = require("../../models");

// GET all tags
router.get("/", (req, res) => {
    Tag.findAll({
        include: [{ model: Band }]
    })
    .then(tagData => res.json(tagData))
    .catch (err => {
        res.status(500).json(err);
    });
});    

// GET one tag by id
router.get("/:id", (req, res) => {
    Tag.findOne({
        where: {
            id: req.params.id
        },
        include: [{ model: Band }]
    })
    .then(tagData => {
        if (!tagData) {
            res.status(404).json({message: 'No tag found with this id'})
            return;
        }
        res.json(tagData);
    })
    .catch(err => {
        res.status(500).json(err);
    })
});

// POST new tag
router.post("/", (req, res) => {
    Tag.create({
        genre1: req.body.genre1,
        genre2: req.body.genre2,
        genre3: req.body.genre3,
        fee: req.body.fee,
        location: req.body.location,
        travelRadius: req.body.travelRadius,
        setList: req.body.setList
    })
    .then(tagData => res.json(tagData))
    .catch (err => {
        res.status(500).json(err);
    });
});

// PUT update tag by id
router.put("/:id", (req, res) => {
    Tag.update({
        where: {
            id: req.params.id
        }
    })
    .then(tagData => {
        if (!tagData) {
            res.status(404).json({message: 'No tag found with this id'})
            return;
        }
        res.json(tagData);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

// DELETE tag by id
router.delete("/:id", (req, res) => {
    Tag.destroy({
        where: {
            id: req.params.id
        }
    })
    .then((tagData) => {
        if (!tagData) {
            res.status(404).json({message: 'No tag found with this id'})
            return;
        }
        res.json(tagData);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

module.exports = router;