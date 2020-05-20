---DELETE TABLE 
DROP TABLE IF EXISTS drinkers;
DROP TABLE IF EXISTS cellar; 

---DRINKERS
CREATE TABLE drinkers (
    drinker_id SERIAL PRIMARY KEY, 
    name VARCHAR(30), 
    email TEXT, 
    password VARCHAR
);

INSERT INTO drinkers (name, email, password)
VALUES
('Monica', 'm@fakemail.com', 'password'); 


---WINE
CREATE TABLE wine (
    wine_id SERIAL PRIMARY KEY, 
    year INT, 
    vineyard TEXT, 
    name TEXT, 
    color TEXT, 
    origin VARCHAR 
); 

INSERT INTO wine (year, vineyard, name, color, origin)
VALUES
(2012, 'Aridus', 'Tank 9', 'Red Blend', 'Phoenix, Arizona'), 
(2001, 'Foppiano Vineyards', 'Petite Sirah', 'Red', 'Russian River Valley, California'), 
(2008, 'Quilt', 'Cabernet Sauvignon ', 'Red', 'Napa Valley, California'); 


---CELLAR
CREATE TABLE cellar (
    cellar_id SERIAL PRIMARY KEY, 
    drinker_id INT REFERENCES drinkers(drinker_id), 
    wine_id INT REFERENCES wine(wine_id), 
    notes VARCHAR, 
    rating INT
); 

INSERT INTO cellar (drinker_id, wine_id, notes, rating)
VALUES
(1, 1, 'Full body, very smooth', 5), 
(1, 2, 'Full body, hints of cherry on the nose, light on sweetness', 4), 
(1, 3, 'Lighter in body, very smooth, not acidic', 4); 


---SELECT
SELECT * FROM drinkers; 
SELECT * FROM wine; 
SELECT * FROM cellar; 