# Write your MySQL query statement below

SELECT DISTINCT l1.Num as ConsecutiveNums from Logs l1,
    Logs l2,
    Logs l3 where l1.id = l2.id -1 AND l2.id = l3.id -1 AND l1.Num = l2.Num AND l2.Num = l3.Num
