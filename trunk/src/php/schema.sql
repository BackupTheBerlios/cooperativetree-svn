CREATE TABLE IF NOT EXISTS `node` (
  `id` bigint(20) unsigned NOT NULL auto_increment,
  `title` varchar(100) collate utf8_unicode_ci default NULL,
  `description` text collate utf8_unicode_ci,
  `type` varchar(10) collate utf8_unicode_ci NOT NULL default 'node',
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM ;

CREATE TABLE `node_link` (
`parent` BIGINT UNSIGNED NOT NULL ,
`child` BIGINT UNSIGNED NOT NULL ,
PRIMARY KEY ( `parent` , `child` )
) ENGINE = MYISAM ;