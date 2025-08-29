import FoodModel from "../models/FoodModel.js";
import fs from "fs";

const addFood = async (req, res) => {
  try {
    const image_filename = req.file.filename; // get filename string

    const food = new FoodModel({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: image_filename,
    });

    await food.save();
    res.json({ success: true, message: "Food Added" });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: "Error" });
  }
};

const listfood = async (req, res) => {
  try {
    const foods = await FoodModel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
}
// remove food item
const removeFood = async (req, res) => {
  try {
    const food = await FoodModel.findById(req.body.id);
    fs.unlink(`uploads/${food.image}`, () => {});

    await FoodModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Food Removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
}

export  { addFood,listfood ,removeFood};
