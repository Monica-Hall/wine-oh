---WILL DISPLAY WINES THE USER ADDED INTO THEIR CELLAR

SELECT w.wine_id, w.year, w.vineyard, w.name, w.color, w.origin, c.notes, c.rating
FROM wine w
JOIN cellar c 
ON c.wine_id = w.wine_id; 
-- WHERE c.drinker_id = $1; 

--TODO CHECK WITH MENTOR TO SEE IF I NEED TO ADD IN LINE 7, OR IF IT SHOULD BE LEFT OUT 