// module.exports = {
//     createWine: async(req, res) => {
//         try {
//             const db = req.app.get("db"); 
//             const {brand, name, type, origin, notes} = req.body;
//             const {drinker_id} = req.session.user; 

//             const wine = await db.wines.create_wine({brand, name, type, origin, notes, drinker_id}); 
//             res.status(200).send(wine)
            
//         } catch (error) {
//             console.log("error creating wine", error)
//             res.status(500).send("There was an error creating your wine, please try again.")
//         }
//     }, 
    
//     deleteWine: async(req, res) => {
//         try {
            
//         } catch (error) {
//             console.log("error deleting wine", error)
//             res.status(500).send("There was an error deleting your wine, please try again.")
            
//         }
//     }, 

//     editNote: async(req, res) => {
//         try {
            
//         } catch (error) {
//             console.log("error editing note", error)
//             res.status(500).send("There was an error editing your note, please try again.")
//         }
//     }, 

//     getWines: async(req, res) => {
//         try {
            
//         } catch (error) {
//             console.log("error retrieving  wine cellar", error)
//             res.status(500).send("There was an error retrieving your wine cellar, please try again.")            
//         }
//     }
// }