---THIS WILL CREATE A WINE TO ADD TO THE DASHBOARD
    ---THERE WILL NOT BE A RATING OR NOTE SECTION HERE 

INSERT INTO wine (year, vineyard, name, color, origin)
VALUES (${year}, ${vineyard}, ${name}, ${color}, ${origin}); 

SELECT w.wine_id, w.year, w.vineyard, w.name, w.color, w.origin
FROM wine w
JOIN cellar c 
ON c.wine_id = w.wine_id; 
-- WHERE c.drinker_id = $1; 

--TODO CHECK WITH MENTOR TO SEE IF I NEED TO ADD IN LINE 11, OR IF IT SHOULD BE LEFT OUT 