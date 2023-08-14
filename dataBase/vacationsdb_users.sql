-- MySQL dump 10.13  Distrib 8.0.29, for macos12 (x86_64)
--
-- Host: localhost    Database: vacationsdb
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(45) NOT NULL,
  `lastName` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(200) NOT NULL,
  `role` enum('user','admin') NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Peter','Lison','peter@gmail.com','041985','user'),(2,'Shane','Tdv','shane@gmail.com','042016','user'),(3,'Gail','Cunningham','gail.cunningham@example.com','051976','user'),(4,'Theresa','Jenkins','theresa.jenkins@example.com','041958','user'),(5,'Seth','Hamilton','seth.hamilton@example.com','031993','user'),(6,'Grace','Carter','grace.carter@example.com','071948','user'),(7,'Victor','Lynch','victor.lynch@example.com','071995','user'),(8,'Christina','Lisunov','christinatdv@gmail.com','03091985','admin'),(9,'mr','td','ov@gmail.com','b8affef9aa888692d3fdc8312dc60ba868315f000e7b087529e71b110dd9077c','user'),(10,'artiom','Kramar','artkramdddlrt@gmail.com','a860d24f31d82a4fbf73c4239d615936fcdfbd6d08319ba3807303469a0a35d1','user'),(11,'mr2','td2','ov2@gmail.com','c09806a0b27d33f4630d7d484766b1dee133381b0de307b7d6af4b5d2f4ac30f','user'),(12,'Karina','Zaval','krzav@gmail.com','f22d21a0423653780fd3e09fb0e6291425ecccabc1715b009bc01f59c65edf44','user'),(13,'Lubav','Wave','lubtrwav@gmail.com','78c605e56af994ddfc3f2724aa2792bfdcdff3dc9cd9f7d8012a2f65b3604fd1','user'),(14,'Kobi','Assor','kobiasor@gmail.com','7c3f808d34d7a81ce3eb643a27247ebc34ffac85606dc2f59b1248c51b01e40f','user'),(15,'Pet','Sor','petsor@gmail.com','1642ae6573e4cffdeef477552d117555f5b4d20ded16d04b58859d02ee7fb61b','user'),(16,'Pet','Tod','pettdo@gmail.com','1642ae6573e4cffdeef477552d117555f5b4d20ded16d04b58859d02ee7fb61b','user'),(17,'15','tdbn','ov15@gmail.com','bbe51927ce24597c919623d10d54cb92ac707688b9dd3a320f227887d3257d6f','user'),(18,'Mila','Hrom','milahrom@gmail.com','28fa5dd740e9e06d36f1ab993c074b1817cc230f954b6c094e75e00d850d759b','user'),(19,'Chris','Tdv','christylsn@gmail.com','ffa3acce9250cfcf720b717de4a96c5ded1289f0f00729e54363649dda781664','user'),(20,'chr','lasn','chrlasn@gmail.com','555555','admin'),(21,'mr2','td2','ov28888@gmail.com','31dbd48d863ffd5274caec76826cb5a27e40a88e25bae5608338d3ba1efbc0a5','user'),(22,'Elena','Zavalov','zavalovelenazaval@gmail.com','c2fb6dcbd9960bdc118a2e3abd8a4eaf709872cc51fe726595544e9953040e03','user'),(23,'ch','ch','hfhf','1e5915204fb13c2dda665f9469530c3301656f2d64bc32e571de8b6af73815c7','user'),(24,'','','','2e219163744d235b3eb8c5cc08a53363d87a0c14dcc955ef632f58ab1b78f0b2','user'),(25,'Elena2','Zavalov2','zavalov2elenazaval@gmail.com','6d690bda4a91d279213445605672976b3da6f3700ca8083529fac28948d29d3d','user'),(26,'mr5','td','ov5@gmail.com','a45d913f2ddf3f0bf66ca0e7051963b43899c966134bae5ab13842c453744b4d','user'),(27,'peter','hhhhh','hfhf@gmail.com','58702e897eac1b75bddea97cb794c9e4c86bb4dc286da2e51bcd9b47a686a02b','user'),(28,'mr10','td10','ov10@gmail.com','995ac66a9109e3c9818c173910cd775e24e20cf375a6e8e7b95f157314ac2126','user'),(29,'Katya','Lsn','katyalsn@gmail.com','11922f2667308e19c155fe3c5ba8013f041d73dd206c9280a01cf9c295fc2e9e','user'),(30,'Katya2','Lsn2','katyalsn2@gmail.com','483ef3b78a185cb90ff314ed72051bed014037b05d24fff9dd5a9808a0dca32f','user'),(31,'Katya22','Lsn22','katyalsn22@gmail.com','2202c37847c7427a7f59bda5d1ff8761bf48d12abaacba9d2c4a4f3976e0d148','user'),(32,'Katya222','Lsn222','katyalsn222@gmail.com','fd3c27385d8cd9d350137e443ca009cd85bb8fbcc4368d00604ebebf041e059e','user'),(33,'Katya2222','Lsn2222','katyalsn2222@gmail.com','3a934fc00994e135f3133cbb81411344425366132da715ef9b1617a9774960cb','user'),(34,'Yulia','Tep','tepyulia@gmail.com','4f416b0263c5c52d737dae566ee17a70319af8115516b63c2980814f14ab78a7','admin'),(35,'peter','hhhhh','tttt@gmail.com','3bdbe567678fc0e8c6f27a9d6223b32f6932de053c8d750543e20333dd75410e','user'),(36,'christy5','lsn5','hfh78f@gmail.com','ee90a90175d03f1b731b1d58f0cc0b12c6138599d07e7be3a4bc816587f2cf39','admin'),(37,'Yulia22','Tep22','tepyulia22@gmail.com','88cf6630ec3432e7132804c5152481ff04b70b4518ec39993d72da1f32ddde4c','user'),(38,'Ethan','Lisunov','ethantdv@gmail.com','8722c86ddc62936151d34176f793f24b39edf72351fc1a7e9e8c627efffe2232','user'),(39,'marina66','td66','mar66@gmail.com','31dbd48d863ffd5274caec76826cb5a27e40a88e25bae5608338d3ba1efbc0a5','user'),(40,'mr150','td150','ov150@gmail.com','c1500fdfddb6eaedc0874ea3413e0abe548458fa028300dd76e0becceb97dd92','user'),(41,'test','test2','test2@gmail.com','97fe2cb8b0313b99ed0d17c1cab5a86ca73bbe11adeff5c8beda788ea676dba5','user'),(42,'test55','test555','555@gmail.com','f29e0ba008dce0d503f523ed378eccefd76f624ebd0919129412f56330176c9d','user'),(43,'sh','sh','sh@gmail.com','0acf4086833866fb059adf29736143effd05639f2a5cc000ca5d987ecda98823','user'),(44,'sh','sh','sh2@gmail.com','34c3edf1060af5f56127ed261d584e03ae6773a1806fa2e226f0785116a335c0','user'),(45,'sh','sh','sh22@gmail.com','59bff335487e9987a0a94346cd2110c1884905607e6414cffb1a0022a6a10d11','user'),(46,'sh555','sh555','sh555@gmail.com','f9012c4f06c3bb8474993e64336231478f1372026a5a25752386effe2af390b2','user'),(47,'Ira','Kra','kraira@gmail.com','d78b2367449c34239fc3e0dff44ce1872fde1eb1d16fd1d9031cfcd54df82971','user'),(48,'test','test','test@gmail.com','50b5ba0b1d1a1a3b68b4f7d5141d79238f339bfbd64a2d650a80227566dd031c','user'),(49,'testt','testt','testt@gmail.com','4fd198b6d56754d45c3631f5aa27aa2517b90bb79be092bb5c37e6173489c77e','user'),(50,'testing','testing','testing@gmail.com','512ebbf8ef780fcd1bacca466c82e874e5443c816df67da1b33dfc9154ab0b97','user'),(51,'testing2','testing2','testing2@gmail.com','48b5be29059f3ae265e51a8c0b6e982ccd83a08c7dcbad3eb1a31c3afedf6362','user'),(52,'testing55','testing55','testing55@gmail.com','9859f1a2720b0e420968b6867296fba78e0d5ff66660b282d96b180fd52d7525','user'),(53,'finalTest','finalTest','finalTest@gmail.com','6d7e503299637590d756dfcce3f405d78679d1b6462c03859026a945c396e613','user'),(54,'Irusya','Krm','krmira@gmail.com','da7167276a03a1612744dcf1ab3f0d7721f7412e50f7dc433a109c0963ff5922','user'),(55,'shane','tdv','shtdv@gmail.com','34f60eba0f110926c212cd942721633c767b2ce9a9e6cbb53fe0145a9bacde03','user'),(56,'Anya','Brag','braganya@gmail.com','16d708877e1576baa51ca19b7e48bda09fef5603f82bdda167963aac8f3cbd64','user'),(57,'admin','admin','admin@gmail.com','7ec207363311776a85575d00b5ead493a4045cccb04c797bb7cca2bae21d6704','admin'),(58,'Marina','Sharvit','sharvit@gmail.com','b28ca5885c707a52d48b453fad8ee80ad26c4bdba786d3636c8eebf4b949f072','user'),(59,'Clarin','Kanitsky','clarink@gmail.com','2e20bbdb3b7bd11043891b0663d486575dd7f65f8243e976d4637c42622b1f46','user'),(60,'Taya','Kar','tayak@gmail.com','c8cfc87cb80208e1e73e50bff6341f79650cba442c2d3bd96282547967835670','user'),(61,'Stas ','Karn','staska@gmail.com','21b9cd3b16037cea42aa71ba0fd0ae3222ce07549025814091aa3312b74899c1','user'),(62,'Maxim','Shvarts','maxshvarts@gmail.com','c4d85a1d2463522eb31cdeb8b0a645327d6b8db20f1a43060f6fd40c2ae0d14c','user'),(63,'lsn','lsn','lsn@gmail.com','bf7cb9b56589a330ffffd085479e73b6c0f5c12e3ca6e50eadd3dce83a2b6869','user');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-19 15:56:06
