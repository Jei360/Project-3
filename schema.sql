
DROP DATABASE IF EXISTS dtabase;
CREATE DATABASE dtabase;
USE dtabase;

DROP TABLE IF EXISTS `User`;
CREATE TABLE `User`(
    id int(10) PRIMARY KEY auto_increment,
    firstname char(30) NOT NULL DEFAULT '',
    lastname char(30) NOT NULL DEFAULT '',
    username char(30) NOT NULL DEFAULT '',
    password char(255) NOT NULL DEFAULT ''
    )ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
      LOCK TABLES `User` WRITE;
      INSERT INTO `User`VALUES (620081234,'Jovaun','Whittaker','JWhittaker','JWhitt12'),
      (620086894,"Kevin","Gates","KGates","KGates12"),
      (620056439,"Carlene","Smith","CSmith","CSmith23")
      ,(620012345,"Thomas","Jennings","TJennings","TJenn567"),
      (620035790,"Patrick","Swazy","PSwazy","PSwaz765");
   UNLOCK TABLES;
DROP TABLE IF EXISTS `Message`;
CREATE TABLE `Message`(
    id1 int(10) PRIMARY KEY auto_increment,
    recipient_ids int(10) NOT NULL DEFAULT '0',
    user_id int(10) NOT NULL DEFAULT '0',
    subject char(30) NOT NULL DEFAULT '',
    body char(30) NOT NULL DEFAULT '',
    data_sent char(30) NOT NULL DEFAULT ''
    )ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
    LOCK TABLES `Message` WRITE;
    INSERT INTO `Message` VALUES(2001,620081234,620035790,'INFO2180','How do you create a table?','yes'),
    (2002,620056439,620012345,"COMP2190","This course is difficult","yes"),
    (2003,620035790,620086894,"FOUN1019","When is the essay due??","yes");
    UNLOCK TABLES;

DROP TABLE IF EXISTS `Message_read`;    
CREATE TABLE `Message_read`(
    id2 int(30)  NOT NULL PRIMARY KEY auto_increment,
    message_id int(10) NOT NULL DEFAULT '0',
    reader_id int(10) NOT NULL DEFAULT 0,
    dates char(30) NOT NULL DEFAULT ''
    )ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
      LOCK TABLES `Message_read` WRITE;
      INSERT INTO `Message_read` VALUES(0004,0001,620081234,'27-11-2016'),
      (0005,0002,620056439,"28-11-2016"),
      (0006,0003,620035790,"29-11-2016");
    UNLOCK TABLES;
   