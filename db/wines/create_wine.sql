INSERT INTO cellar (drinker_id, brand, name, type, origin, notes)
VALUES (${drinker_id}, ${brand}, ${name}, ${type}, ${origin}, ${notes}); 

SELECT c.cellar_id, c.brand, c.name, c.type, c.origin, c.notes, d.drinker_id
FROM cellar c
JOIN drinkers d
ON c.drinker_id = d.drinker_id; 


-- - RUN THIS BY MENTORS 

-- - WHAT I WANT IT TO DO: USER WILL BE ABLE TO CREATE A SECTION FOR A NEW WINE TO DISPLAY THE BRAND, NAME, TYPE, ORIGIN, AND NOTES TO ADD TO ADD TO THEIR BOOKMARK/WINE CELLAR 