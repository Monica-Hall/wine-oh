module.exports = { 
    createWine: async(req, res) => {
        try {
            const db = req.app.get("db"); 
            const {year, vineyard, name, color, origin} = req.body;

            const wine = await db.wines.create_wine({year, vineyard, name, color, origin}); 
            res.status(200).send(wine)
            
        } catch (error) {
            console.log("error creating wine", error)
            res.status(500).send("There was an error creating your wine, please try again.")
        }
    }, 
    
    deleteWine: async(req, res) => {
        try {
            const db = req.app.get("db"); 
            const {cellar_id} = req.params 
            // const {drinker_id} = req.session.user; 

            const wine = await db.wines.delete_wine({cellar_id}); 
            res.status(200).send(wine); 

            
        } catch (error) {
            console.log("error deleting wine", error)
            res.status(500).send("There was an error deleting your wine, please try again.")
        }
    }, 

    editWine: async(req, res) => {
        try {
            const db = req.app.get("db"); 
            const {cellar_id} = req.params; 
            const {notes, rating} = req.body; 
            // const {drinker_id} = req.session.user; 

            const wine = await db.wines.edit_wine({cellar_id, notes, rating});
            res.status(200).send(wine); 

        } catch (error) {
            console.log("error editing note and rating", error)
            res.status(500).send("There was an error editing your note and rating, please try again.")
        }
    }, 

    getCellar: async(req, res) => {
        try {
            const db = req.app.get("db");
            // const {cellar_id} = req.params 
            // const {drinker_id} = req.session.user;

            const wine = await db.wines.get_cellar(); 
            res.status(200).send(wine); 

        } catch (error) {
            console.log("error retrieving the cellar", error)
            res.status(500).send("There was an error retrieving the cellar, please try again.")            
        }
    }, 

    getDash: async(req, res) => {
        try {
            const db = req.app.get("db"); 

            const wine = await db.wines.get_dash(); 
            res.status(200).send(wine); 

        } catch (error) {
            console.log("error retrieving the dashboard", error)
            res.status(500).send("There was an error retrieving the dashboard, please try again.")            
        }
    }, 

    addToCellar: async(req, res) => {
        try {
            const db = req.app.get("db"); 
            const {drinker_id} = req.body; 
            const {wine_id} = req.params; 

            const wine = await db.wines.add_to_cellar({drinker_id, wine_id}); 
            res.status(200).send(wine)

        } catch (error) {
            console.log("error adding wine to the cellar", error)
            res.status(500).send("There was an error adding wine to the cellar, please try again.")            
        }
    }
}