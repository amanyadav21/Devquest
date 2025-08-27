const sqlQuestions = {
    "IntroductionToSQL": [
        { id: 1, question: "What is SQL and what is its purpose?" },
        { id: 2, question: "What is the difference between SQL and MySQL?" },
        { id: 3, question: "Explain the structure of an SQL query." },
        { id: 4, question: "What is the role of a database management system (DBMS)?" },
        { id: 5, question: "What are the different types of SQL statements?" },
    ],
    "SELECTStatement": [
        { id: 1, question: "Write a basic SQL query to retrieve all columns from a table." },
        { id: 2, question: "Write a query to retrieve specific columns from a table." },
        { id: 3, question: "What is the difference between `SELECT *` and `SELECT column_name`?" },
        { id: 4, question: "How do you retrieve unique records using SQL?" },
    ],
    "WHEREClause": [
        { id: 1, question: "Write a query to filter records based on a specific condition." },
        { id: 2, question: "How can you use comparison operators (`=`, `>`, `<`, `>=`, etc.) in SQL?" },
        { id: 3, question: "Write a query to find records that meet multiple conditions using `AND`." },
        { id: 4, question: "Write a query to find records using `OR` conditions." },
        { id: 5, question: "How do you use `BETWEEN` and `IN` operators in SQL?" },
    ],
    "ORDERByClause": [
        { id: 1, question: "Write a query to sort results in ascending order by a column." },
        { id: 2, question: "Write a query to sort results in descending order by a column." },
        { id: 3, question: "What is the default sort order when using `ORDER BY`?" },
        { id: 4, question: "Write a query to sort results by multiple columns." },
    ],
    "INSERTStatement": [
        { id: 1, question: "Write a query to insert a single record into a table." },
        { id: 2, question: "Write a query to insert multiple records into a table." },
        { id: 3, question: "What is the difference between inserting values directly and using a subquery?" },
    ],
    "UPDATEStatement": [
        { id: 1, question: "Write a query to update a record in a table." },
        { id: 2, question: "Write a query to update multiple columns in a table." },
        { id: 3, question: "What precautions should you take before using the `UPDATE` statement?" },
    ],
    "DELETEStatement": [
        { id: 1, question: "Write a query to delete a record from a table." },
        { id: 2, question: "Write a query to delete records that meet a specific condition." },
        { id: 3, question: "What is the difference between `DELETE` and `TRUNCATE` in SQL?" },
    ],
    "JOINs": [
        { id: 1, question: "What is the purpose of using `JOIN` in SQL?" },
        { id: 2, question: "Write a query to perform an `INNER JOIN` between two tables." },
        { id: 3, question: "Write a query to perform a `LEFT JOIN` between two tables." },
        { id: 4, question: "What is the difference between `INNER JOIN` and `LEFT JOIN`?" },
        { id: 5, question: "Write a query to perform a `RIGHT JOIN` between two tables." },
        { id: 6, question: "Write a query to perform a `FULL OUTER JOIN` between two tables." },
    ],
    "GROUPBYClause": [
        { id: 1, question: "What is the purpose of the `GROUP BY` clause in SQL?" },
        { id: 2, question: "Write a query to count the number of records for each unique value in a column." },
        { id: 3, question: "Write a query to find the sum of values grouped by another column." },
        { id: 4, question: "What is the difference between `HAVING` and `WHERE`?" },
    ],
    "AggregatingFunctions": [
        { id: 1, question: "What are the different aggregate functions available in SQL?" },
        { id: 2, question: "Write a query to calculate the average value of a column." },
        { id: 3, question: "Write a query to find the minimum and maximum value in a column." },
        { id: 4, question: "Write a query to count the number of records in a table." },
    ],
    "Subqueries": [
        { id: 1, question: "What is a subquery in SQL?" },
        { id: 2, question: "Write a query using a subquery to find records with values greater than the average." },
        { id: 3, question: "Write a query to use a subquery in the `WHERE` clause." },
        { id: 4, question: "What is the difference between correlated and non-correlated subqueries?" },
    ],
    "Indexes": [
        { id: 1, question: "What is an index in SQL and why is it used?" },
        { id: 2, question: "How do you create an index on a table in SQL?" },
        { id: 3, question: "What is the difference between a clustered and non-clustered index?" },
    ],
    "Normalization": [
        { id: 1, question: "What is database normalization and why is it important?" },
        { id: 2, question: "What is the first normal form (1NF)?" },
        { id: 3, question: "What is the second normal form (2NF)?" },
        { id: 4, question: "What is the third normal form (3NF)?" },
        { id: 5, question: "What are some advantages and disadvantages of normalization?" },
    ],
    "Transactions": [
        { id: 1, question: "What is a database transaction?" },
        { id: 2, question: "What are the ACID properties of a transaction?" },
        { id: 3, question: "Write a query to begin a transaction in SQL." },
        { id: 4, question: "What is the difference between `COMMIT` and `ROLLBACK`?" },
    ],
    "Views": [
        { id: 1, question: "What is a view in SQL?" },
        { id: 2, question: "Write a query to create a view in SQL." },
        { id: 3, question: "How can you update a view in SQL?" },
        { id: 4, question: "What are the advantages and limitations of using views?" },
    ],
    "StoredProcedures": [
        { id: 1, question: "What is a stored procedure in SQL?" },
        { id: 2, question: "Write a simple stored procedure to insert data into a table." },
        { id: 3, question: "How do you execute a stored procedure in SQL?" },
        { id: 4, question: "What are the advantages of using stored procedures?" },
    ],
    "Triggers": [
        { id: 1, question: "What is a trigger in SQL?" },
        { id: 2, question: "Write a query to create a trigger that updates a record before inserting." },
        { id: 3, question: "What are the different types of triggers in SQL?" },
    ],
    "Constraints": [
        { id: 1, question: "What are constraints in SQL?" },
        { id: 2, question: "What is the purpose of a `PRIMARY KEY` constraint?" },
        { id: 3, question: "What is the difference between `UNIQUE` and `PRIMARY KEY` constraints?" },
        { id: 4, question: "What is a `FOREIGN KEY` constraint?" },
        { id: 5, question: "Write a query to create a table with `NOT NULL` and `DEFAULT` constraints." },
    ],
};

export default sqlQuestions;
