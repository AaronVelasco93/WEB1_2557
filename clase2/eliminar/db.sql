drop schema if exists `eliminar`;
create schema if not exists `eliminar` default character set utf8 collate utf8_spanish_ci;

use  `eliminar`;

CREATE TABLE `persona`(
`numero` int(11) not null,
`nombre_usuario` text not null,
`carrera`  text not null,
`no_cuenta` int(10) not null,
`direccion` text not null,
`telefono` varchar(8) not null,
`email` text not null,
`password` varchar (8) not null,
`fecha_registro`  datetime not null default current_timestamp,
`permisos` int(11) not null default  '2'
) engine=Innodb default charset=utf8;

alter table `eliminar`.`persona`
change column `numero` `numero` int (10) not null auto_increment,
add primary key (`numero`);




