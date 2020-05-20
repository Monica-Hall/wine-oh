---USERS WILL ADD NOTES AND RATING ON THE WINE THEY ADDED WITHIN THEIR CELLAR

INSERT INTO cellar (drinker_id, wine_id, notes, rating)
VALUES (${drinker_id}, ${wine_id}, ${notes}, ${rating}); 

SELECT w.wine_id, w.year, w.vineyard, w.name, w.color, w.origin, c.notes, c.rating
FROM wine w
JOIN cellar c 
ON c.wine_id = w.wine_id
WHERE c.drinker_id = $1; 