DROP DATABASE IF EXISTS recipes;
CREATE DATABASE recipes;

\c recipes;
CREATE TABLE categories (
  ID SERIAL PRIMARY KEY,
  name VARCHAR

);

INSERT INTO categories(name)
  VALUES('Dessert');


CREATE TABLE recipes (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  ingredients TEXT,
  description TEXT,
  difficulty VARCHAR,
  time_cooking VARCHAR,
  categories_id INTEGER REFERENCES categories(id)
);

INSERT INTO recipes (name, ingredients, description, difficulty, time_cooking, categories_id)
  VALUES ('Kladdkaka',
          '100 g smör; 2 st ägg; 3dl socker; 3 msk kaka; 2 tsk vaniljsocker; 1 1/2 dl vetemjöl',
          'Sätt ugnen på 150 C; Smält smör i kastrull, låt svalna; Rör ihop övriga ingredientser i en bunke. Tillsätt det smälta smöret.; Blanda försiktigt ihop till en jämn smet och häll sedan över smeten i en smörad och bröad springform med löstagbar kant, 24 cm i diameter (för 8 bitar).;Grädda mitt i ugnen i ca 20 minuter beroende på hur kladdig/seg du vill ha den.;Ta ut kladdkakan och låt svalna.; Sikta florsocker över om så önskas. Servera med vispad grädde, färska jordgubbar eller annan valfri frukt till.', 'Medel', '30 min', 1);
