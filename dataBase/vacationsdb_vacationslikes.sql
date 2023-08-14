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
-- Table structure for table `vacationslikes`
--

DROP TABLE IF EXISTS `vacationslikes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vacationslikes` (
  `vacationId` int NOT NULL,
  `userId` int NOT NULL,
  PRIMARY KEY (`vacationId`,`userId`),
  KEY `fk_vacationId_idx` (`vacationId`),
  KEY `fk_userId_idx` (`userId`),
  CONSTRAINT `fk_userId` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `fk_vacationId` FOREIGN KEY (`vacationId`) REFERENCES `vacations` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vacationslikes`
--

LOCK TABLES `vacationslikes` WRITE;
/*!40000 ALTER TABLE `vacationslikes` DISABLE KEYS */;
INSERT INTO `vacationslikes` VALUES (1,3),(1,7),(15,2),(15,4),(15,58),(16,1),(16,21),(16,58),(17,6),(17,7),(17,9),(18,9),(19,12),(19,55),(19,56),(20,13),(20,49),(20,50),(20,51),(20,52),(21,15),(21,21),(21,23),(22,19),(22,50),(23,22),(24,21),(25,7),(25,52),(25,56),(25,58),(26,49),(26,50),(26,51),(26,52),(27,4),(27,58),(28,59),(28,60),(28,61),(29,1),(29,2),(29,5),(29,9),(30,9),(30,62),(39,58),(39,59),(39,60),(43,53),(43,54),(43,55),(43,58),(44,49),(44,50),(44,51),(44,52),(45,56),(45,58),(45,61),(45,62),(46,58),(46,60),(47,58),(48,58),(49,58),(51,58),(52,58),(53,58);
/*!40000 ALTER TABLE `vacationslikes` ENABLE KEYS */;
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
