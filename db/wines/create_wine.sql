INSERT INTO cellar (drinker_id, brand, name, type, origin, notes)
VALUES (${drinker_id}, ${brand}, ${name}, ${type}, ${origin}, ${notes}); 

SELECT c.cellar_id, c.brand, c.name, c.type, c.origin, c.notes, d.drinker_id
FROM cellar c
JOIN drinkers d
ON c.drinker_id = d.drinker_id; 


-- - RUN THIS BY MENTORS 