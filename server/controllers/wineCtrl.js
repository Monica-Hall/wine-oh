module.exports = { 
    createWine: async(req, res) => {
        try {
            const db = req.app.get("db"); 
            const {year, vineyard, name, color, origin} = req.body;
            const {drinker_id} = req.session.user; 

            const wine = await db.wines.create_wine({year, vineyard, name, color, origin, drinker_id}); 
            res.status(200).send(wine)
            
        } catch (error) {
            console.log("error creating wine", error)
            res.status(500).send("There was an error creating your wine, please try again.")
        }
    }, 
    
    deleteWine: async(req, res) => {
        try {
            
        } catch (error) {
            console.log("error deleting wine", error)
            res.status(500).send("There was an error deleting your wine, please try again.")
            
        }
    }, 

    editNote: async(req, res) => {
        try {
            
        } catch (error) {
            console.log("error editing note", error)
            res.status(500).send("There was an error editing your note, please try again.")
        }
    }, 

    getCellar: async(req, res) => {
        try {
            
        } catch (error) {
            console.log("error retrieving the cellar", error)
            res.status(500).send("There was an error retrieving the cellar, please try again.")            
        }
    }, 

    getDash: async(req, res) => {
        try {
            
        } catch (error) {
            console.log("error retrieving the dashboard", error)
            res.status(500).send("There was an error retrieving the dashboard, please try again.")            
        }
    }, 

    addToDash: async(req, res) => {
        try {
            
        } catch (error) {
            console.log("error adding wine to the dashboard", error)
            res.status(500).send("There was an error adding wine to the dashboard, please try again.")            
        }
    }, 

    addToCellar: async(req, res) => {
        try {
            
        } catch (error) {
            console.log("error adding wine to the cellet", error)
            res.status(500).send("There was an error adding wine to the cellar, please try again.")            
        }
    }
}