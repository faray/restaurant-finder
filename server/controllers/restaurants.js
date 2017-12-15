const Restaurant = require('../models').Restaurant

module.exports = {

	// CREATE / ADD A RESTAURANT
	addRestaurant(req,res) {
		return Restaurant.create({
			name: req.body.name,
			image_url: req.body.image,
			address: req.body.address,
			contact_info: req.body.contacts,
			meals:req.body.meals})
		.then(restaurant=> res.status(201).send({"info":"ADDED",message:restaurant})).catch((error)=>{
			res.status(400).send({"error":error})
		})
	},

	
	//UPDATE A RESTAURANT
	updateRestaurant(req,res) {
		return Restaurant.findById(req.params.id)
		.then((restaurant)=>{
			if(!restaurant){
				return res.status(404).send({message:'Restaurant not Found'})
			}
			return restaurant.update({
			name: req.body.name || restaurant.title,
			image_url: req.body.image || restaurant.image_url,
			address: req.body.address || restaurant.address,
			contact_info: req.body.contacts || restaurant.contact_info,
			meals:req.body.meals || restaurant.meals
			})
			.then(()=>res.status(200).send({message:"UPDATED", input:restaurant}))
			.catch((error)=>{
				res.status(400).send({message:error})
			})
		})
		.catch((error)=>{
				res.status(400).send({message:error})
			})
	},

	//GET A RESTAURANT BY ID
	getRestaurantById(req,res) {
		return Restaurant.findById(req.params.id)
		.then((restaurant)=>{
			if(!restaurant){
				return res.status(404).send({message:'Restaurant not Found'})
			}
			res.status(200).send(restaurant)
		}).catch((error)=>{res.status(400).send(error)})
	},


	// GET LIST OF ALL RESTAURANTS
	listOfAllRestaurants(req,res) {
		return Restaurant.all().then((restaurants)=> {
			res.status(200).send(restaurants)
		}).catch((error)=>{
			res.status(400).send({message:error})
		})
	},


	//DELETE A RESTAURANT
	deleteRestaurant(req,res) {
		return Restaurant.findById(req.params.id)
		.then((restaurant)=>{
			if (!restaurant){
				return res.status(400).send({message:'Restaurant Not Found'})
			}
			return restaurant.destroy()
			.then(()=>{
				res.status(200).send({message:'Restaurant Deleted'})
			})
			.catch((error)=>{
				res.status(400).send(error)
			})
		})
		.catch((error)=>{
			res.status(400).send(error)
		})
	},

	//GET RESTAURANTS THAT MATCH A SPECIFIC NAME
	getRestaurantsWithName(req,res) {
		return Restaurant.findAll({
			where:{
			 name : { $iLike: '%'+req.params.name}
			}
		})
		.then((restaurant)=>{
			if(!restaurant){
				return res.status(400).send({message:error})
			}
			res.status(200).send(restaurant)
		})
		.catch((error)=>{
			res.status(400).send({message:error})
		})
	},

}