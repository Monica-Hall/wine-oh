-- - DROP TABLE IF EXISTS drinkers;
-- - DROP TABLE IF EXISTS cellar; 

-- DRINKERS
CREATE TABLE drinkers (
    drinker_id SERIAL PRIMARY KEY, 
    name VARCHAR(30), 
    email TEXT, 
    password VARCHAR
);

INSERT INTO drinkers (name, email, password)
VALUES
('Monica', 'm@fakemail.com', 'password'); 

-- CELLAR
CREATE TABLE cellar (
    cellar_id SERIAL PRIMARY KEY, 
    drinker_id INT REFERENCES drinkers(drinker_id), 
    brand TEXT, 
    name TEXT, 
    type TEXT, 
    origin VARCHAR, 
    notes TEXT
); 

INSERT INTO cellar (drinker_id, brand, name, type, origin, notes)
VALUES
(1, 'Aridus', 'Tank 9', 'Red Blend', 'Phoenix, Arizona', 'Full body, very smooth'), 
(1, 'Foppiano Vineyards', 'Petite Sirah', 'Red', 'Russian River Valley, California', 'Full body, hints of cherry on the nose, light on sweetness'), 
(1, 'Quilt', 'Cabernet Sauvignon ', 'Red', 'Napa Valley, California', 'Lighter in body, very smooth, not acidic'); 

SELECT * FROM drinkers; 
SELECT * FROM cellar; 