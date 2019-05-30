////MODULARIZATION WITH MODELS:
const Haiku = require("./models")
const path = require("path")


//EXPORT OUR CONTROLLERS SO OUR ROUTES CAN ACCESS IT
module.exports = {
    index : ( req , res ) => {
        Haiku.find ( { } )
        .then ( data => {
            console.log ( 'displaying objects' , data );
            res.json ( { message : 'success' , data : data } );
        } )
        .catch ( err => {
            console.log ( 'query error' , err );
            res.json ( { message : 'Error' , error : err } );
        } )
    } ,
		

	show : ( req , res ) => {
		console.log ( req.params )
		Haiku.findById( req.params.id )
		.then ( data => {
			console.log ( 'reading data' , data );
			res.json ( { message : 'showing object' , data : data } )
		} )
		.catch ( err => {
			console.log ( 'error' , err );
			res.json ( {message: 'Could not find' , error : err } );
		} )
	} ,
		

	add : ( req , res ) => {
		console.log ( req.params )
		Haiku.create( {
			name : req.body.name,
			haiku1: req.body.haiku1,
			haiku2: req.body.haiku2,
			haiku3: req.body.haiku3,
			title: req.body.title,
			description : req.body.description,
			
			} )
		.then ( data => {
			console.log ( 'successfully added' , data );
			res.json ( { message : 'Object added' , data : data } )
		} )
		.catch ( err => {
			console.log ( 'error' , err );
			res.json ( {message: 'Could not add' , error : err } );
		} )
	} ,
		

	
	updt : ( req , res ) => {
		console.log ( req.params )
		Haiku.findByIdAndUpdate( req.params.id, {
			name : req.body.name,
			haiku1: req.body.haiku1,
			haiku2: req.body.haiku2,
			haiku3: req.body.haiku3,
			title: req.body.title,
			description : req.body.description,
			type : req.body.type,
		},{runValidators: true} )
		.then ( data => {
			console.log ( 'successfully updeted' , data );
			res.json ( { message : 'Object added' , data : data } )
		} )
		.catch ( err => {
			console.log ( 'error' , err );
			res.json ( {message: 'Could not add' , error : err } );
		} )
	} ,
		
    delete : ( req , res ) => {

		console.log ( req.params )
		Haiku.findByIdAndDelete( req.params.id )
		.then ( data => {
			console.log ( 'successfully deleted' , data );
			res.json ( { message : 'Object deleted' , data : data } )
		} )
		.catch ( err => {
			console.log ( 'error' , err );
			res.json ( {message: 'Could not delete' , error : err } );
		} )
	} ,

	addreview: (req, res) => {
		Haiku.findByIdAndUpdate(req.params.id, {$push: {reviews: {
			commenter: req.body.commenter,
			stars : req.body.stars,
			review : req.body.review
		}
		}}, {runValidators: true})
			.then(data => res.json({data: data}))
			.catch(err => res.json({error: err}));
	},

	showcreater: ( req, res) =>{
		console.log ( req.params )
		Haiku.find({
			name : req.body.name
		}) 
		.then ( data => {
			console.log ( 'reading data' , data );
			res.json ( { message : 'showing object' , data : data } )
		} )
		.catch ( err => {
			console.log ( 'error' , err );
			res.json ( {message: 'Could not find' , error : err } );
		} )
	},

	// getreview : ( req , res ) => {
    //     Haiku.find ( { } )
    //     .then ( data => {
    //         console.log ( 'displaying objects' , data );
    //         res.json ( { message : 'success' , data : data } );
    //     } )
    //     .catch ( err => {
    //         console.log ( 'query error' , err );
    //         res.json ( { message : 'Error' , error : err } );
    //     } )
    // } ,



	// c_add : ( req , res ) => {

	// 	Haiku.findById( req.params.id )
	// 		.then ( data => {
	// 			// data is the cake information (from db)
	// 			// req.body is info from user (comment information)
	// 			let rest = data;
	// 			let newReview = req.body;
	// 			rest.comments.push(newReview);
	// 			rest.save()
	// 			.then ( saveData => {
	// 				console.log ( 'successfully added comment' , saveData );
	// 				res.json ( { message : 'Comment added' , data : saveData } )
	// 			} )
	// 			.catch ( err => {
	// 				console.log ( 'error' , err );
	// 				res.json ( {message: 'Could not add' , error : err } );
	// 			} )
	// 		} )
	// 		.catch ( err => {
	// 			console.log ( 'error' , err );
	// 			res.json ( {message: 'Could not find' , error : err } );
	// 		} )
	// 	console.log ( req.params )
	// } ,
		


	angular : ( req , res ) => {
		res.sendFile(path.resolve("./public/dist/public/index.html"))
	} ,
	
	// starHaiku: (request, response) => {
    //     Haiku.findById(request.params.id)
    //         .then((data) => {
    //             data.likes += 1;
    //             data.save()
    //                 .then((saveData) => {
    //                     response.json({message: "Success", data: saveData});
    //                 })
    //                 .catch((err) => {
    //                     console.log(err);
    //                     response.json({message: "Error", error: err});
    //                 });
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //             response.json({message: "Error", error: err});
    //         });
	// },
	

	// c_add : ( req , res ) => {

	// 	Haiku.findById( req.params.id )
	// 		.then ( data => {
	// 			// data is the Haiku information (from db)
	// 			// req.body is info from user (Review information)
	// 			let Haiku = data;
	// 			let newReview = req.body;
	// 			Haiku.Reviews.push(newReview);
	// 			Haiku.save()
	// 			.then ( saveData => {
	// 				console.log ( 'successfully added Review' , saveData );
	// 				res.json ( { message : 'Review added' , data : saveData } )
	// 			} )
	// 			.catch ( err => {
	// 				console.log ( 'error' , err );
	// 				res.json ( {message: 'Could not add' , error : err } );
	// 			} )
	// 		} )
	// 		.catch ( err => {
	// 			console.log ( 'error' , err );
	// 			res.json ( {message: 'Could not find' , error : err } );
	// 		} )
	// 	console.log ( req.params )
	// } ,
	
	// // c_updt : ( req , res ) => {
	// // 	Haiku.findById( req.params.HaikuId )
	// // 	.then ( data => {
	// // 		console.log ( 'reading data' , data );
	// // 		res.json ( { message : 'showing object' , data : data } )
	// // 	} )
	// // 	.catch ( err => {
	// // 		console.log ( 'error' , err );
	// // 		res.json ( {message: 'Could not find' , error : err } );
	// // 	} )
	// // 	console.log ( req.params )
	// // 	Haiku.findByIdAndUpdate( req.params.id, {
	// // 		$push: {Review: {
	// // 			customer :req.body.customer,
	// // 			star : req.body.star,
	// // 			review : req.body.review,
	// // 		}}} )
	// // 	.then ( data => {
	// // 		console.log ( 'successfully updeted' , data );
	// // 		res.json ( { message : 'Object added' , data : data } )
	// // 	} )
	// // 	.catch ( err => {
	// // 		console.log ( 'error' , err );
	// // 		res.json ( {message: 'Could not add' , error : err } );
	// // 	} )
	// // } ,
		
	
    
    // // c_delete : ( req , res ) => {

	// // 	Haiku.findById( req.params.HaikuId )
	// // 	.then ( data => {
	// // 		console.log ( 'reading data' , data );
	// // 		res.json ( { message : 'showing object' , data : data } )
	// // 	} )
	// // 	.catch ( err => {
	// // 		console.log ( 'error' , err );
	// // 		res.json ( {message: 'Could not find' , error : err } );
	// // 	} )
	// // 	console.log ( req.params )
	// // 	Haiku.findByIdAndDelete( req.params.id )
	// 	.then ( data => {
	// 		console.log ( 'successfully deleted' , data );
	// 		res.json ( { message : 'Object deleted' , data : data } )
	// 	} )
	// 	.catch ( err => {
	// 		console.log ( 'error' , err );
	// 		res.json ( {message: 'Could not delete' , error : err } );
	// 	} )
	// } ,

}