DROP DATABASE IF EXISTS puppies;
CREATE DATABASE puppies;

\c puppies;
CREATE TABLE kennel (
  ID SERIAL PRIMARY KEY,
  name VARCHAR

);

INSERT INTO kennel(name)
  VALUES('FlowerPotKennel');


CREATE TABLE pups (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  breed VARCHAR,
  age INTEGER,
  sex VARCHAR,
  kennel_id INTEGER REFERENCES kennel(id)
);
INSERT INTO pups (name, breed, age, sex, kennel_id)
  VALUES ('Tyler', 'Retrieved', 3, 'M', 1);
