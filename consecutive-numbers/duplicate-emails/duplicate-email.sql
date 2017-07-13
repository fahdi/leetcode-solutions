SELECT DISTINCT P1.Email as Email from Person P1, Person P2 where P1.Id <> P2.Id AND P1.Email LIKE P2.Email 

