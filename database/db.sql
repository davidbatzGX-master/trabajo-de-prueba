create database crudvehiculos;
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';

use crudvehiculos;

create  table vehiculos(
	id int(6) unsigned auto_increment primary key,
    marca varchar(60)not null,
    modelo varchar (60)not null,
    año varchar(60) not null,
    placa varchar (60)not null,
    estado varchar(60) not null
);

show tables;

describe vehiculos;