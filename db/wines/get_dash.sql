---WILL DISPLAY ALL WINES THAT HAVE BEEN ADDED INTO THE DASHBOARD

SELECT w.wine_id, w.year, w.vineyard, w.name, w.color, w.origin
FROM wine w
JOIN cellar c 
ON c.wine_id = w.wine_id; 

---TODO DO I NEED TO ADD A "WHERE" ON LINE 7? 