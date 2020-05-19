  
UPDATE cellar
SET notes = ${notes}
WHERE cellar_id = ${cellar_id}; 

SELECT c.cellar_id, c.brand, c.name, c.type, c.origin, c.notes d.drinker_id
FROM cellar c
JOIN drinkers d
ON c.drinker_id = d.drinker_id; 