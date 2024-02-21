---
name: Object-Oriented Python
tags: [Mental Castle]
style: fill
color: danger
description: Walking through Medieval Wuerzburg
---



## Chapter 1, Systems Design

- `Flat`: Object: collection of data & associated behavior
- `Mennas`: Class: kind of an object, e.g. apples or barrels
- `Flasher`: Association: most basic way of two instances of objects being related
    - cardinality: specific number or range
    - multiplicity: more than one instance
- `Neunerplatz`: Attribute: state of an object (e.g. raw, ripe) aka property / instance variable
- Fraunhofer: Behaviors: methods of classes are actions, can accept params & return values
- `Friedensbridge`: Encapsulation: hiding information that isn't relevant (APIs, television)
- `CCW`: Abstraction: dealing w/ level of detail that is most appropriate to deal w/ task (mechanic vs. driver)
- `Roentgen`: Composition: collection of multiple objects to create a new one, chess: 2 players, 64 positions
- `FH`: Aggregation: aggregate objects can exist independently (vs. a position cannot w/o the board)
- `Wald`: Inheritance: classes can inherit attributes & methods from other classes (e.g., king or queen inherit chess_set & color, but define own shape & move)
- `Post`: Polymorphism: ability to treat a class differently depending on which subclass is implemented (board.move() may move car, chess figure > duck typing)
- `Busbf`: Multiple Inheritance: the son has his mother's eyes and his dad's nose; Python resolves conflicts with method order resolution (MRO)
- `Bahnhof`: 4 + 1 View Technique:
- `Vorplatz`: Context view: describes actors/systems that use tool
    - `Anzeigen`: Logical view: data entities, static attributes and relationships (heart of it :)
    - `Automaten`: Process view: how data is processed in activity or sequence diagram
    - `Hallway`: Development view: code components to be build & relations amongst those
    - `Elevator`: Physical view: cloud, deployment and integration details

## Chapter 2, Objects in Python

- `Postbox`: Core rule: everything is an object, every object is defined being an instant of min one class
- `Ramp`: Variables: is a reference to an object, like a yellow sticky note
- `Street`: Type hints: are type annotations, not enforced; use mypy to check for types; example: def odd(n: int = 2) -> bool: return n%2 != 0
- `Sporthalle`: Classes: defined e.g. as ‘class Point:‘ followed by the class contents indented; use CapWording
- `Kirche`: Adding attributes: can be done with dot notation (p1 = Point(), p1.x = 5)
- `Buga`: Adding behavior: define methods like functions but required by methods: with ‘self’ (n times)
- `Landwirtschaftsamt`: Default values: set standard values for arguments in functions
- `Norma`: Initialization method __init__(self, x:float, y:float): now, the Point class can never go without an x or y value.
- `Enter DH`:  Docstrings: use docstrings to annotate code, pip doctest can locate and confirm code examples
- `Deutschhaus` Board: Modules: 
    - module are Python files 
    - module names are file’s stem (w/o .py-ending)
    - import: import <module>: from <module> import <class> (as <shortname>)
    - never: import * from <module>
- `Chemie`: Organization: 
    - src: will hold the code and packages; additionally docs & test
    - packages are folders with an __init__.py, to be found
- `Stairs`: Absolute vs. relative imports: 
    - import statement uses period operator to separate packages and modules (ecom.prod)
    - relative imports: are done with . in the same folder .. in the parent > avoid 
- `Toilet`: Global keyword: tells Python that variables inside a function shall be available at module-level.
- `Mensa`: Immediate execution: All module-level code is executed right away, therefore always use if __name__ == “__main__”
- `K13`: Adulthood: in python there is no “private”; only a leading underscore indicates that a variable shouldn’t be used, yet it can still be accessed
- `EXIT`: Virtual environments: should always be used, and added to .gitignore because of different versions: cd project-dir > python -m venv env > source env/bin/activat

## Chapter 3, When Objects Are Alike

- `Gate 1`: Basic inheritance: every class inherits from object
- `Upper steep`: Superclass (parent class): class being inherited from
- `Lower steep`: Subclass: is derived from parents class or extends it by adding functionality

```python
class Contact(object): 			# syntax: class(superclass)
	all_contacts: List["Contact"] = [] 	# class variable
	def __init__(self, name: str, email: str) -> None:
		self.name = name 	# self: each time a different name is appended to an object
		self.email = email 
		contact.all_contacts.append(self) # append any new contact
```

- `Summer Cinema`: Class Variable: all_contacts is shared by all instances of the class, there is only one list!

```python
class Supplier(Contact): 			# inheritance, having also name & email available for use
	def order(self, order: "Order") -> None
		print(f"This would send an {order} to {self.name}") 	# name can be used
```
- `Parking`: Overriding: altering or replacing a method of the superclass w/ a new method with the same name in the subclass. This replacement will automatically be called. Avoid duplicated code with super: 

```python
		class Friend(Contact):
	def __init__(self, name, email, phone: str): 	# overrides superclass Contact's init
		super.__init__(name, mail) 	# binds instance to parent class, inits itself
self.phone = phone 		# sets phone attrib
```
- 2. `Gate`: Multiple inheritance: subclass inherits from 2+ parent classes
  - `Restaurant`: 
    - In Python with mixins: mixin class definitions are meant to be inherited to provide extra functionality.
    - Require two classes: (1) requ of the mixin, (2) aspect the mixin provides

```python
class Emailable(Protocol): email: str		 		# hint: Emailable
class MailSender(Emailable): def send_email(self, message) 	# this is the mixin
# "if MailSender is emailable (i.e. has an email: str) field, then send_email"
```

- `Upper Parking`: Emailable hint is a protocol: "contract for features of a class" telling mypy that every subclass of Emailable objects must support email attribute
  - 	Multiple inheritance is done well, if resulting class has no unique features and is a combination of mixins > contact initializer will add a new contact + mails can be send by mixin
```python
class EmailableContact(Contact, MailSender): pass  	# this is multiple inheritance 
```
- `Franken Museum`: Multiple inheritance can create diamond problems, that are being resolved by the MRO (method resolution order)
- `3. Gate with water`: **kwargs: collects all additional keywords into a dict
- 1. `Gate`: Polymorphism: 
  - different behaviors happen based on subclass being used, w/o knowing what the subclass is
  - example: WavFile or MP3File can be subclasses of AudioFile that each implement play() in a different way; the play() function encapsulates (hides info details) the decompression algos of the AudioFiles
- `Front garden`: Duck typing: allows to use any object that provides the required behavior w/o forcing subclassing

## Chapter 4, Expecting the Unexpected

- `Sushi place`: Exceptions: are objects inherited from BaseException
- `Doener`: Error Categories:
- `Parking`: Something went wrong: e.g., SyntaxError or NameError
- `Traffic lights`: Python Runtime: e.g., RuntimeError (update version of a dependency)
- `Old Main Bridge`: Design problem: e.g., ZeroDivisionError (compute avg of an empty list)
- `Weinschoppen`: interface Errors: e.g., OSError (a file isn't where it is supposed to be)
- `Woehrl`: Raising an Exception example: "if not wordlist: raise ValueError("No word in wordlist")", then program is exited, unless an 'except' clause handles the error 
- `Brunnen`: 'try … except xx': Handle errors by wrapping them, yet never use except alone (bad coding!)
- `Rathaus`: 'as' keyword: captures exceptions as a variable
- `Rewe`: 'finally' clause: is always executed (e.g., clean up a database, close an open file)
- `Ralf`: exceptions aren't exceptional: use them / catch them whenever they can appear
- `Rolex`: Python mentality: It's easier to ask for forgiveness (run code, wait for exceptions), than permission (trying to catch every possible error upfront, which takes a lot of time).

## Chapter 5, When to Use Object-Oriented Programming

- `Sternla`: Object-orientation: 
  - if you have data & behavior <> data structures if only data, functions if only behavior
  - if you have interaction between objects: you can use inheritance
- `Fielmann`: Decorator @property: making methods that look like attributes
  - Glasses: Use cases: attrib validation, lazy processing, access control or caching content
  - Lenses: When: methods for actions, attributes in __init__(), properties for setting/getting
- `Dom`: Manager objects: rely on composite design (knitting objects together) and act like office managers
- `Hugendubel`: Eager vs. lazy: 
  - eager: unzip everything, search, zip everything
  - lazy: unzip to zip file by file > achieved by properties

## Chapter 6, Abstract Base Classes and Operator Overloading

- `McDonalds`: Metaclass/abstract base class: 
  - creating class definitions with placeholders (clearer than raising NotImplementedError)
  - can't be used themselves (implemented with ellipses …)
- `Cafe Schoenborn`: Jobs of classes (done by metaclass "type"): 
  - act as container for methods and attribute definitions
  - create and manage instances through special methods
- `Frauenkirche`: Collections.abc defines abcs for built-ins collections, e.g. container (in), iterable (for), length (len); change them by changing those
- `City Lib`: Operator Overloading: (+, -, /, *) are implemented by special methods; overload them e.g. / in pathlib module

## Chapter 7, Python Data Structures

- `Kaufhof`: Empty objects: it's not possible to set any attributes on empty objects
- <> Empty classes: class MyObject: pass; m = MyObject(); m.x = 5 will work
- `H&M`: Tuples: a = 45, => (45,)
  - Control: store a specific value, like coordinates or rgb colors
  - Down: immutable, hence having a hash value, can be unpacked, and sliced
  - Sport: created by separating values w/ comma & inside of other objects w/ brackets
  - Boxers: Python will always print them w/ brackets in canonical representation
  - Leave: disadvantage: can be confusing w/o any key / description
- `Marco Polo`: Named Tuples: 'tuples with attitude', class Stock(NamedTuple): symbol:str; current: float
  - values can be passed in positional or as keywords
  - attributed can be accessed by name
  - immutability only refers to attribute of tuple contained elements can be mutable
- `Esprit`: Dataclasses: sample: @dataclass class StockDefaults: name: str; current: float = 0.0
  - can be stateful with mutable objects, include equality comparison
  - @dataclass(order = True): allows to compare
  - @dataclass(order = True, frozen = True): is like NamedTuple
- `Mueller`: Dictionaries: demo_dict.get("Joy") is fast w/ hash; demo_dict.get("Joy", "not found") for KeyErrors
  - keys(), values() and items() return iterator over these (items as a tuple with (k, v))
  - hash collision can lead to slowdowns
- `Pizza Hut`: When to use which?
  - @dataclass
  - If data is immutable: NamedTuple
  - Dicts are best when complete set of keys isn't known
- `Eiscafe`: Defaultdict: Whenever a key is accessed that isn't already in the dict, a default is created
  - Useful for creating containers of data
- `DeuBa`: Counter: beefed-up dict where keys are counted & values are the quantities
  - collections.Counter[sample_list].most_common(1) 	# returns the top 1 most common value 
- `Sportladen`: Lists: in Py should be used, if we want to store one type of instances only
    - type hinting with list[int] 
    - sort() sorts case-sensitive, i.e. Z is before a
    - mix of unsortable elems will return TypeError
    - immutable sequence of unicode chars
    - encode chars to create bytes, decode bytes to recover chars
    - format strings with f-strings f"hello {name[0]}" # can contain vars or even code
    - escape braces by using them twice will format to one
- `JuliusSpital`: Sets: represent unordered group of unique items, incredibly efficient for uniqueness
    - purpose: identify things that are in set or not
    - method: union: (if in either, duplicates are added once), intersection & (if in both), summetric_difference ^ (in one or the other but not both)
- `Metzger`: Queues: implements FIFO, order of implementation
    - collections.deque w/ popleft() & append() 	# most efficient if not concurrent
    - queue w/ get () & put() 				# most efficient if concurrent
    - as a Python "list" w/ pop() & append() 		# else
  
## Chapter 8, The Intersection of Object-Oriented and Functional Programming

- `Zeitzeichen`: Built-ins: Python avoids the narrow viewpoint of 'it must always be object.method()'
    - len(myobj) is more readable than myobj.__length__()
    - reversed(): takes any sequence and returns a copy in reverse order
    - enumerate(): returns a tuple with an index, and a value of an object
    - eval(), exec() & compile() are dangerous as they execute string code
- `BuergerSpital`: Method Overloading: multiple methods with the same name that accept different sets of params (Java poop!)
    - overloading params: allow alternative types using Union[...] as hints
    - overloading the method: use patterns of params 
- `Theater`: Parameters: 
    - `Stage`: positional only: all arguments need to be provided in order; no keyword enforced with "/": def pos(a,b,/,c) # a & b are required as first two + naming (a='4') is permitted
    - `Vorhang`: positional or keywords: e.g., all args in order, mandatory args in order without defaults
    - `Decke`: keywords only: keyword only argos are place after *, e.g. 
    - 	def kw(a,b,*,c, d) # c & d need to be called with a kw; e.g, kw(4, 5, c=3, d=6)
    - Licht: optional params: by specifying default values; these are evaluated exactly once when func is first created; hence set default values to 'None' or reset lists with 'sam = [] if sam is None else sam
    - `Sitz`: *args: def get_webpages(*links): * accepts any number of arguments and puts them all in a tuple named links
    - `Lehne`: **kwargs: accepts arbitrary keyword arguments; it's possible to pass any keyword, be careful!
    - `Ich`: unpacking arguments show_args(**more args): useful for mapping user input
- `Residenzplatz`: Callable Objects:
    - `parking`: def a_function(): top-level objects and are passed around to execute once a condition is met
    - `Ampel`: callbacks: used for reactions (e.g., when a user clicks)
    - `statue`: monkey patching: myobj.do_something = do_another_thing will patch all instances of myobj and create chaos; only use in automated testing to await expensive API-calls
    - `balcony`: Adding __call__() method: makes objects callable, and allows them to be stateful (funcs cannot!)
- `Weinkeller`: File I/O: 
    - `entrance`: open(): opens OS files, & returns a Python file object, names can be relative or absolute
    - `statue`: Pathlib works with '/'
    - `basement`: Pass a mode when opening: 'w': write, 'a': append, 'r': read, 'b': binary
    - `Faesser`: read(): returns entire contend, readlines() returns list of all lines
    - `table`: explicitly use '\n' character, coz only print() has newlines in python
    - `candles`: always close() filebuffers with a contextmanager
- `Garten`: Context manager with:
    - `oben`: using with statement ensures a context (api-call, file buffer, threading) is closed even if an error happens making finally: close() unnecessary, even returns partial results
    - with source_path.open() as source_file 	# binds context to variable
    - `unten`: ALWAYS WRAP FILES INTO WITH STATEMENTS
- `B. Neumann`: Yield: produces the first result of a sequence of results

## Chapter 9, Strings, Serialization, and File Paths

- `TB Recht`: Format language: .2f # show decimal point # show two places after decimals # show input as floating
- `UniCafe`: Custom formatters: e.g. datetime module
- `Loma/SNF`: Regex: special chars, separation, individual, range, escape, negator, anchors
- `Laufstil`: Matching Patterns: 
  - re.match 		# match a regex
  - re.compile		# compile to be more efficient 
  - re.search 		# matches only first instance
- `Wohnzimmer`: Pathlib: 
    - cwd()			# returns current working dir
    - .parent / .absolute	# returns parent or absolute path
- `Ringpark`: pickle: oo-way to store object state
    - dump(): accepts an object to be written
    - load(): read serialized object's state from a file-like object
    - attention: pickle is specific to major Python releases -> only good for temp persistence, and risky!
    - unpickable: dynamic attribs, open network sockets
- `Sandermare`: json: human-readable, only data can be serialized -> safe

## Chapter 10, The Iterator Pattern

- `tegut`: Design Pattern: attempt to bring formal definition of correctly designed structures to SE, like to bridges
- `Mensa`: Iterator: object w/ next() & done() method
- `Sanderrasen`: Iterable: object w/ elements to be iterated over
- `Adalbero Kirche`: Comprehensions: 
    - can be used to map inputs to outputs, applying filters along the way
    - highly optimized & readable, work with lists, sets, dicts, and NamedTuples
    - sample = [int(x) for x in numbers if x < 100] [mapping in source if filter]
- `Eichendorffapotheke`: PYTHONHASHSEED var: can be set to impose an order
- `Ararat`: Generator expressions: 
    - lazy comprehensions producing values on demand
    - syntax () 	# generator, not a tuple
    - use if a file (e.g., logs) may be too large to fit in memory or when calc sum, min, max in a func when we don't actually need a list / dict / set
- `Ludwigkai`: Generator functions: 
    - yield statement returns an item & then suspends the function
    - when called again via .next() it will start where it left off
    - use over generator expressions, e.g. for exception handling
- `Stadtstrand`: Yield from: useful for chained generators, with each being lazy avoiding to full up memory
- `Löwenbrücke`: Lambda objects: anonymous functions callable w/ params used w/ map or filter
- `Mergentheimer`: Walrus operator (:=) : compute a result and test if it's truthy

## Chapter 11, Common Design Patterns

- `Ruderzentrum`: Decorator design pattern: used to add features to functions or classes, apply directly or with @ syntax: @ log_args
  - allows to wrap an object w/ a core functionality with other objects to alter their functionality
  - in Python (due to duck typing) there is no need to formalize relations w/ abstract interface defs
  - use cases: logging decorator, zipping info, saving info, register decorated classes
  - decorator funcs can be used w/
  - print_args(myfunc) 	# using one func around another
  - monkey-patching
  - @ decorator syntax
  - example: lru_cache(64) 		# least recently used 64 results will be cached /saved temporarily
- `Judenbühlweg`: Observer design pattern: simplify writing GUIs, formalize relationships between objects as plug-ins: notifyZonk
    - used for state monitoring or event handling like clicks in GUI
    - allows a given object to be monitored by an unknown & dynamic group of observer objects, the core object being observed needs to implement an interface that makes it observable
    - the observer can be notified via the __call__() method
    - use case: complex cloud applications can suffer from chaos, we can use observers to record state changes, making recovery and restart easier 
    - adding totally different types of observers to do different kind of things
- `Sebastianisteig`: Strategy design pattern: decompose problems, use Strategy objects as plug-ins: Desktop Background
    - implement different solutions to a single problem
    - core class chooses the most appropriate implementation (concurrent, memory-heavy, etc.)
    - use cases: sorting algos or desktop background scaling
    - binding of the strategy instance happens as late as possible
    - partially true discussion "because Python has first-class funcs, the strategy pattern is unnecessary"
    - Strategy pattern can be implemented without the class definitions as functions not methods
    - difference to mixins: mixins created in source code, while strategy objects can be created at runtime, allowing a late binding
- `Zollhaus`: Command design pattern: summarize a collection of changes that are applied to other objects: Fancy Dice
    - 'passive classes': hold objects and maintain internal state (observer pattern)
    - 'active classes': reach out into other objects to take action (command pattern)
    - CP involves a hierarchy of classes that each do something
    - A core class can create a command (list) to carry out an action.
    - complex example with a dice roll command & further adjustments 'as commands'
- `Steinbachtal`: State design pattern: define processing where there is a change in state and in behavior: GPS processing
    - represents state transition systems, where an object's behavior is constrained by the state it is in + there are narrowly defined transitions
    - two types of classes:
    - core: maintain current state & forward actions
    - state: typically hidden from other state objects
    - GPS example: core NMEA state; classes: Message, Reader, Waiting, Header, Body, Checksum, End
- `Annaschlucht`: Singleton design pattern: when you need to be sure there is only one specific instance: module imports
    - antipattern, basic idea: allow exactly one instance of a certain object to exist
    - In most languages, you make the constructor of the Singleton class private, but in Python we're all adults :) 
    - Python provides built-in Singleton patterns:
    - Python modules: import module will create a singleton instance
    - Python class definitions: a class can only be created once in a namespace
    - To use module level variables (instead of Singletons), instantiate the class after you defined it; e.g., class Body(NMEAState): … => BODY = Body() => now single state objects are being reused
 
## Chapter 12, Advanced Design Patterns

- `Frankenwarte`: Adapter: Insert an intermediary so a client can use a class, even if it's not a perfect match
- `Höhenweg mit Blick`: Façade: create a unified interface over a number of objects
- `Nikolaushof`: Flyweight: implement kind of lazy initialization, instead of copying objects, we use class that share common pool of data
- `Käppele`: Abstract Factory: can be used to build a class that can emit instances that will work together
- `Leistenstrasse`: Composite: used for complex document types like XML / HTML
- `St. Burkard`: Template patterns: if a number of similar, complex classes, then we can leave gaps as openings in templates

## Chapter 13, Testing Object-Oriented Programs

- `Brueckenbaeck`: Reasons:
    - ensure code is working the way the dev thinks it does
    - code continues working after changes to it
    - ensure dev understood the requirements
    - ensure code has a maintainable interface
- `Guru Indian`: TDD: write tests first & only unwritten code should be untested, makes you consider how code is used
- `Jahnterassen`: Unit tests: components work in isolation
    - use assert statement to verify results
    - python -m pytest: searches for 'tests' folder and files named 'test_' and executes them
    - pytest suppresses print() if test passes
    - setup_module() and teardown_module(): run before & after test to e.g. create & close a socket
- `Africa Festival`: Integration tests: components work when integrated
- `Bruecke dt. Einheit`: Coverage: ensures all lines of code ar tested,"coverage_report -m pytest tests html'
- `Cinemaxx`: Pattern: 
    - GIVEN … AND …: data from test case & conditions	data = [1,2,3]
    - WHEN: what we will do					m = average(data)
    - THEN: expected result 					assert m = 2
- `das Boot`: Boundary value analysis: decompose weird inputs into method
- `Parkhaus`: Equivalence partitioning: use 'valid' and 'invalid' data
- `Steinburg`: fixtures: functions to build a GIVEN condition prior to WHEN step, example: 
    - @pytest.fixture: def valid_stats(): return Statslist([1,2,3,4,4]
    - @pytest.mark.skipif(sys.version_info < (3,9), reason='requires Python 3.9')
    - @scope: create fixtures that last longer than one test
    - @pytest.mark.xfail: mark if test should fail
- `Weingut am Stein`: Mocks: isolate a unit under test, requires object that is expensive or risky to use
- `Psychiatrie`: Sentinel: use to create opaque objects
- `Bahnhof`: Bugs: write test(s) that proves a bug is occurring, write the code to make the tests stop failing

## Chapter 14, Concurrency

- `Berliner Ring`: Concurrency: making a computer do multiple things at once.
- `McFit`: Threads: sequence of byte-code that may be interrupted and resumed; problem: shares data, concurrency is illusion
- `Europastern`: GIL (global interpreter lock): constraints scheduling, managers memory, garbage collection & calls
- `Kaufland`: Multiprocessing: spins up new OS processes (w/ interpreters), pools implement interprocess communication, problems: sharing data between processes create overhead as communication requires serialization
- `Burger King`: Futures (promise): object that wraps a function call, that func is run in background [asyncio.create_task()]
- `Uniklinik`: Asyncio: combines futures with even loop coroutines
- `Mediamarkt`: Coroutine: interleaves, function that is waiting for an event & can provide events to other coroutines [async def]
- `Hornbach`: Interleaving: multitasking, an application can be processing data while also be waiting for the next request
- `Ikea`: Event loop: switches control among coroutines waiting for events [await] & [asyncio.gather()]
- `Estenfeld`: Non-preemptive: coroutines explicitly hand control to each other at specific points, removing need for locking 
- `Kürnach`: Sleeper async code sample:

```python
async def sleepers():			#  coroutine, async def + await make sleepers interleaved
	tasks = [asyncio.create_task(await asyncio.sleep(3) for i in range(4)]
	await asyncio.gather(*tasks)		# returns control to event loop
asyncio.run(sleepers())			# start event loop, executing sleepers coroutine
```

- `Unterpleichfeld`: Async keyword: documentation notifying python that the coroutine contains await calls
- `Bergtheim`: Synchronous execution: coroutine execs code until await => returns control to event loop => event loop executes any other task ​​=> whenever a child task completes, event loop sends result to coroutine => coroutine continues until await/return

## GraphQL vs REST API

- REST API:
    - Client requests data from the server in predetermined structure. 
    - Structure is defined by a set of endpoints and methods that the client must use to access the data.
- GraphQL: allows clients to specify exactly what data they need.
    - More flexibility and scalability, as the client does not need to know the exact structure of the data they are requesting.
    - Allows clients to request multiple resources in a single query, reducing the number of calls to the server and improving performance.

## Amazon Redshift

1. Amazon Redshift is a cloud-based, fully managed, petabyte-scale data warehouse service. 
2. Amazon Redshift is designed to provide fast query performance by using columnar storage technology and parallelizing queries over multiple nodes. 
3. Amazon Redshift is integrated with other AWS services such as Amazon S3, Amazon EC2, and Amazon EMR. 
4. Amazon Redshift is easy to set up, operate, and scale, allowing users to quickly analyze large amounts of data. 
5. Amazon Redshift supports a variety of data warehouse features including sort keys, compression, snapshots, and backups.

## What are the most important key facts about Spark? 

1. Apache Spark is a powerful open-source unified analytics engine for large-scale data processing. 
2. It is fast and supports both in-memory and disk-based processing, making it suitable for a variety of workloads. 
3. Spark runs on top of a cluster manager such as Apache Hadoop YARN, Apache Mesos, or a standalone cluster manager. 
4. It provides an interactive, fault-tolerant, and extensible platform for large-scale data processing. 
5. Spark supports a wide range of programming languages, including Java, Scala, Python, R, and SQL. 
6. It has a rich set of libraries and tools for machine learning, graph processing, and stream processing. 
7. It has a unified architecture designed to enable users to easily develop and deploy applications. 
8. Spark’s performance is highly optimized, allowing it to process large-scale datasets in a fraction of the time of traditional systems.

## What is an RDD? 

RDD stands for Resilient Distributed Dataset. It is the primary data abstraction in Apache Spark and is a fundamental data structure of the system. RDDs represent a collection of items distributed across many compute nodes that can be operated on in parallel. RDDs are immutable and fault-tolerant, meaning that once created, the data within them cannot be changed, and even if a node or partition fails, the system can recover and continue processing.
