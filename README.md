
# [Timestamp Microservice](https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/timestamp-microservice)
# What is the unix time stamp?
The unix time stamp is a way to track time as a running total of seconds. This count starts at the Unix Epoch on January 1st, 1970 at UTC. Therefore, the unix time stamp is merely the number of seconds between a particular date and the Unix Epoch. It should also be pointed out (thanks to the comments from visitors to this site) that this point in time technically does not change no matter where you are located on the globe. This is very useful to computer systems for tracking and sorting dated information in dynamic and distributed applications both online and client side.

# Human Readable Time	Seconds
1 Hour	3600 Seconds
1 Day	86400 Seconds
1 Week	604800 Seconds
1 Month (30.44 days)	2629743 Seconds
1 Year (365.24 days)	31556926 Seconds

# What happens on January 19, 2038?
On this date the Unix Time Stamp will cease to work due to a 32-bit overflow. Before this moment millions of applications will need to either adopt a new convention for time stamps or be migrated to 64-bit systems which will buy the time stamp a "bit" more time.


# Main Functionality

* A request to /api/:date? with a valid date should return a JSON object with a unix key that is a Unix timestamp of the input date in milliseconds

* A request to /api/:date? with a valid date should return a JSON object with a utc key that is a string of the input date in the format: Thu, 01 Jan 1970 00:00:00 GMT

* A request to /api/1451001600000 should return { unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" }

* Your project can handle dates that can be successfully parsed by new Date(date_string)

* If the input date string is invalid, the api returns an object having the structure { error : "Invalid Date" }

* An empty date parameter should return the current time in a JSON object with a unix key

* An empty date parameter should return the current time in a JSON object with a utc key