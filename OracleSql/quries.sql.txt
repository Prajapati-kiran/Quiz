CREATE TABLE QUESTION(
ID  VARCHAR2(3) primary key not null,
CATEGORY VARCHAR2(10),
DIFFICULTYLEVEL VARCHAR2(10),
OPTION1 VARCHAR2(100),
OPTION2 VARCHAR2(100),
OPTION3 VARCHAR2(100),
OPTION4 VARCHAR2(100),
QUESTION_TITLE VARCHAR2(100),
RIGHT_ANSWER VARCHAR2(100));

INSERT INTO question VALUES  (1, 'Java', 'easy',' Dennis Ritchie','James Gosling','Guido van Rossum', 'Bjarne Stroustrup','Who invented Java Programming?','James Gosling');

INSERT INTO question VALUES  (2, 'Java', 'easy', '0', 'null', 'Garbage value', 'Compilation Error', 'What is the default value of the local variables in Java?', 'Garbage value');

INSERT INTO question VALUES  (3, 'Java', 'easy', 'int arr[];', 'int[] arr;', 'array arr[];', 'Both A and B', 'How do you declare an array in Java?', 'Both A and B');

INSERT INTO question VALUES  (4, 'Java', 'easy', 'Scanner input = new Scanner();', 'Scanner input = new Scanner(System.in);', 'Scanner input = new Scanner.in;', 'Scanner input = new Scanner(System.console());', 'What is the correct way to create an object of the `Scanner` class to take input from the user?', 'Scanner input = new Scanner(System.in)');

INSERT INTO question VALUES  (5, 'Java', 'easy', 'final', 'const', 'static', 'constant', 'Which keyword is used to define a constant in Java?', 'final');

INSERT INTO question VALUES  (6, 'Java', 'easy', 'Terminate the program', 'Exit the current loop or switch statement', 'Skip the current iteration of the loop', 'Jump to a specific line of code', 'What is the purpose of the `break` statement in Java?', 'Exit the current loop or switch statement');

INSERT INTO question VALUES  (7, 'Java', 'easy', 'finalize()', 'dispose()', 'clean()', 'delete()', 'Which method is called when an object is garbage collected in Java?', 'finalize()');

INSERT INTO question VALUES  (8, 'Java', 'easy', 'A compiler', 'An interpreter', 'A runtime environment', 'A hardware component', 'What is the Java Virtual Machine (JVM)?', 'A runtime environment');

INSERT INTO question VALUES  (9, 'Java', 'easy', 'By using interfaces', 'By using abstract classes', 'By using multiple extends keywords', 'Java does not support multiple inheritance', 'How is multiple inheritance implemented in Java?', 'Java does not support multiple inheritance');

INSERT INTO question VALUES  (10, 'Java', 'easy', 'Java is a sequence-dependent programming language', 'Java is a code dependent programming language', 'Java is a platform-dependent programming language', 'Java is a platform-independent programming language','Which statement is true about Java?','Java is a platform-independent programming language');



INSERT INTO question VALUES  (11, 'Python', 'easy', 'print("Hello, World!")', 'Compilation Error', 'Runtime Error', 'No Output', 'What is the output of the following code snippet?\n\nprint("Hello, World!")', 'print("Hello, World!")');

INSERT INTO question VALUES  (12, 'Python', 'easy', 'var x', 'int x', 'x = 10', 'declare x', 'What is the correct way to declare a variable in Python?', 'x = 10');

INSERT INTO question VALUES  (13, 'Python', 'easy',  '// Comment', '/* Comment */', '# Comment', '<!-- Comment -->', 'How do you comment out a single line in Python?', '# Comment');

INSERT INTO question VALUES  (14, 'Python', 'easy',  'Skip the current iteration of a loop', 'Terminate the program', 'Do nothing and continue', 'Raise an exception', 'What is the purpose of the `pass` statement in Python?', 'Do nothing and continue');

INSERT INTO question VALUES  (15, 'Python', 'easy', 'len()', 'length()', 'count()', 'size()', 'Which function is used to get the length of a list in Python?', 'len()');

INSERT INTO question VALUES  (16, 'Python', 'easy',  'key in dict', 'dict.contains(key)', 'contains(key, dict)', 'isKeyPresent(key)', 'What is the correct way to check if a key is in a dictionary?', 'key in dict');

INSERT INTO question VALUES  (17, 'Python', 'easy', 'open("example.txt", "r")', 'read("example.txt")', 'file.open("example.txt", "read")', 'fopen("example.txt", "read")', 'How do you open a file named "example.txt" in read mode?', 'open("example.txt", "r")');

INSERT INTO question VALUES  (18, 'Python', 'easy',  'Initialize the class variables', 'Create a new instance of the class', 'Define the class constructor', 'Call the superclass constructor', 'What does the `__init__` method in a Python class do?', 'Define the class constructor');

INSERT INTO question VALUES  (19, 'Python', 'easy',  're', 'regex', 'pyregex', 'pattern', 'Which module is used for regular expressions in Python?', 're');

INSERT INTO question VALUES  (20, 'Python', 'easy',  'list.remove(element)', 'list.delete(element)', 'del list[element]', 'list.pop(element)', 'How do you remove an element from a list in Python?', 'list.remove(element)');
