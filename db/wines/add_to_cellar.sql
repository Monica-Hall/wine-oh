---USERS WILL ADD SELECETED WINE FROM DASH INTO USERS CELLAR 

INSERT INTO cellar (drinker_id, wine_id)
VALUES (${drinker_id}, ${wine_id}); 

SELECT * FROM wine; 