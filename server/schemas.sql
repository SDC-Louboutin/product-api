
create table products (
  id INT unsigned NOT NULL AUTO_INCREMENT,
  name VARCHAR(150) NOT NULL,
  slogan VARCHAR(150) NOT NULL,
  description VARCHAR(150) NOT NULL,
  category VARCHAR(150) NOT NULL,
  default_price INT NOT NULL,
  PRIMARY KEY (id)
);

create table skus (
  id INT unsigned NOT NULL AUTO_INCREMENT,
  styleId VARCHAR(150) NOT NULL,
  size: VARCHAR(150),
  quantity INT,
  PRIMARY KEY (id)
);

create table styles (
  id INT unsigned NOT NULL AUTO_INCREMENT,
  productId INT,
  name VARCHAR(150) NOT NULL,
  sale_price INT,
  original_price INT,
  default_style INT,
  PRIMARY KEY (id)
);

create table photos (
  id INT unsigned NOT NULL AUTO_INCREMENT,
  styleId INT,
  url VARCHAR(150) NOT NULL,
  thumbnail_url VARCHAR(150) NOT NULL,
  PRIMARY KEY (id)
);

create table related (
  id INT unsigned NOT NULL AUTO_INCREMENT,
  current_product_id INT,
  related_product_id INT,
  PRIMARY KEY (id)
);

show tables;