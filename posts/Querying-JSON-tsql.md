---
title: 'Querying JSON and its nested objects with TSQL'
gist: 'When we were challenged to store lot of dynamically modelled data in a relational DB, we decided on storing them in a JSON column of SQL server.'
date: 'Nov 18, 2020 '
---
When we were challenged to store lot of dynamically modelled data in a relational DB, we decided on storing them in a JSON column of SQL server.

[The well documented](https://docs.microsoft.com/en-us/sql/t-sql/functions/json-functions-transact-sql?view=sql-server-ver15) recourses came in handy during initial development.

Although with some workaround
* Runtime JSON deserialization
* Getting around with Store procedures while whole application runs with entity framework

Until today I never got to query nested arrays of a JSON object with SQL. That is when I stumbled upon another method in T-SQL called **`OPENJSON`**


>OPENJSON is a table-valued function that parses JSON text and returns objects and properties from the JSON input as rows and columns.

In other words, OPENJSON provides a rowset view over a JSON document. You can explicitly specify the columns in the rowset and the JSON property paths used to populate the columns. Since OPENJSON returns a set of rows, you can use OPENJSON in the FROM clause of a T-SQL statement just as you can use any other table, view, or table-valued function.


####Few samples

Consider this sample json data

```
DECLARE @json NVARCHAR(MAX) = '{
	"firstName":"James",
	"lastName":"Doe",
	"ChildrenDetails":[
		{
			"Id":1,
			"Name":"John Doe",
			"Languages":["English", "German"]
		},
		{
			"Id":2,
			"Name":"Jane Doe",
			"Languages":["English"]
		},
		{
			"Id":3,
			"Name":"June Doe",
			"Languages":["German", "Tamil"]
		}]
}'
```

### 1. Querying into arrays (ChildrenDetails)

```
SELECT 
    JSON_VALUE(d.value,'$.Id') AS Id,
    JSON_VALUE(d.value,'$.Name') AS Name
FROM OPENJSON(@json,'$.ChildrenDetails') AS d
```


![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/r4wq978smffpc49l31pn.png)

### 2. Flatten Nested arrays (ChildrenDetails + each language)
```
SELECT 
JSON_VALUE(d.value,'$.Id') AS Id,
JSON_VALUE(d.value,'$.Name') AS Languages,
l.value AS Name
  FROM OPENJSON(@json,'$.ChildrenDetails') AS d CROSS APPLY OPENJSON (d.value,'$.Languages') AS l
 ```
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/n6g3426psj8m055t0gy0.png)

Hopefully you can try this with complex JSON structures. The use cases are many, but today this came in handy for a feature to us 😃

Before you leave, a meme:
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/u577z2v5n8z2fssw2n5c.jpg)



`EOF`




