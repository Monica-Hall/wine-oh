---USER WILL BE ABLE TO UPDATE NOTE AND RATING FROM WITHIN THEIR CELLAR 

UPDATE cellar
SET rating = ${rating},
notes = ${notes}
WHERE drinker_id = ${drinker_id}
AND wine_id = ${wine_id}

SELECT w.wine_id, w.year, w.vineyard, w.name, w.color, w.origin, c.notes, c.rating
FROM wine w
JOIN cellar c 
ON c.wine_id = w.wine_id
WHERE c.drinker_id = ${drinker_id}; 
