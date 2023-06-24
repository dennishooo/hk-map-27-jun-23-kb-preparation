**Q1**
<br>
Write a file to show below:

```
*
**
***
****
*****
```

**Q2**
<br>
Write a file to show below:

```
+-+-+-+
 -+-+-
  +-+
   -
```

**Q3**
<br>
Write a file to perform below:

```
Enter a list of numbers: 1, 3, 4, 5, 9, 10, 11, 14
The sum of the numbers is: 57
```

**Q4**
<br>
Write a file to perform below:

```
Enter a number (enter 0 to stop): 1
Enter a number (enter 0 to stop): 3
Enter a number (enter 0 to stop): 4
Enter a number (enter 0 to stop): 5
Enter a number (enter 0 to stop): 9
Enter a number (enter 0 to stop): 10
Enter a number (enter 0 to stop): 11
Enter a number (enter 0 to stop): 14
Enter a number (enter 0 to stop): 0
The sum of the numbers is: 57
```

**Q5**

How do you get information from the below data?

The route name in Traditional Chinese of the first bus.
The number of routes shown in the data.

```
{'routes': [{'overnightRoute': 0,
   'routeId': '2',
   'routeName_c': '大澳 > 梅窩碼頭',
   'routeName_e': 'Tai O > Mui Wo Ferry Pier',
   'routeName_s': '大澳 > 梅窝码头',
   'routeNo': '1',
   'specialRoute': 0},
  {'overnightRoute': 0,
   'routeId': '1',
   'routeName_c': '梅窩碼頭 > 大澳',
   'routeName_e': 'Mui Wo Ferry Pier > Tai O',
   'routeName_s': '梅窝码头 > 大澳',
   'routeNo': '1',
   'specialRoute': 0},
  {'overnightRoute': 0,
   'routeId': '3',
   'routeName_c': '紅磡 (紅鸞道)  > 昂坪',
   'routeName_e': 'Hung Hom (Hung Luen Road)  > Ngong Ping',
   'routeName_s': '红磡 (红鸾道)  > 昂坪',
   'routeNo': '1R',
   'specialRoute': 0}]}
```

**Q6**

Cont'd of the last question, how do you get information from the above data?

All the route numbers
All the terminal names

**Q7**

Further above question, can you create a function to:

Extract the route numbers using the data as a parameter
Extract the terminal names of both ends of a particular route using the data and route number as parameters

**Q8**

Reuse the name collectors made above

Make a name + score collectors + the game. The result should be as follow:

```
Enter player 1 name (enter nothing to stop): Alex
Enter player 2 name (enter nothing to stop): Gordon
Enter player 3 name (enter nothing to stop): Michael
Enter player 4 name (enter nothing to stop):
Here are the player names and their scores: Alex (0), Gordon (0), Michael (0)

Alex's guess the number (1-6): 2
Gordon's guess the number (1-6): 4
Michael's guess the number (1-6): 5
The result is: 5
The scores: Alex (0), Gordon (0), Michael (1)
```

**Bonus**

Can you obtain the data from the source and display them in your website using fetch api?

https://data.gov.hk/tc-data/dataset/hk-td-tis_21-etakmb

reference: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
