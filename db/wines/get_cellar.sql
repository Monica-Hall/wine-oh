---WILL DISPLAY WINES THE USER ADDED INTO THEIR CELLAR

SELECT w.wine_id, w.year, w.vineyard, w.name, w.color, w.origin, c.notes, c.rating
FROM wine w
JOIN cellar c 
ON c.wine_id = w.wine_id
WHERE c.drinker_id = ${drinker_id};