INSERT INTO drinkers (name, email, password)
VALUES (${name}, ${email}, ${hash})
RETURNING *; 