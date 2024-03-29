import express from 'express';
import Hotel from '../models/Hotel.js';
const router=express.Router();

// Create
router.post('/', async function(req, res) {
    const newHotel= new Hotel(req.body)
    try {
        const savedHotel= await newHotel.save();
        res.status(201).json(savedHotel);
    } catch (error) {
        res.status(500).json(error)
    }
})
// Delete
router.delete('/:id', async function(req, res) {
    try {
        await Hotel.findByIdAndDelete(
          req.params.id
        );
        res.status(200).json("The hotel has been deleted successfully");
    } catch (error) {
        res.status(500).json(error)
    }
})
// Update
router.put('/:id', async function(req, res) {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(
          req.params.id,
          { $set: req.body },
          { new: true }
        );
        res.status(200).json(updatedHotel);
    } catch (error) {
        res.status(500).json(error)
    }
})
// Get One
router.get('/:id', async function(req, res) {
    try {
        const hotel = await Hotel.findById(
          req.params.id
        );
        res.status(200).json(hotel);
    } catch (error) {
        res.status(500).json(error)
    }
})
// Get Multiple
router.get('/', async function(req, res) {
    try {
        const hotels = await Hotel.find();
        res.status(200).json(hotels);
    } catch (error) {
        res.status(500).json(error)
    }
})
export default router;