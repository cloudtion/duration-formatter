# Duration Formatter

Simple duration formatter to turn seconds into strings representing lengths of time.

**i.e.**
	
`timeFromSeconds(5053)` returns `"01:24:13"`
	
**and vice versa:**

`secondsFromTime("01:24:13")` returns `5053`


## Basic Usage

Basic usage is illustrated with just to functions, `timeFromSeconds` and `secondsFromTime`:

    import {timeFromSeconds, secondsFromTime} from 'duration-formatter';
	
	
	var time_string = timeFromSeconds(5053);
	
	console.log( time_string  ); 
	
	
	var parsed_seconds = secondsFromTime('01:24:13');
	 
	console.log( parsed_seconds );


## Functions


### timeFromSeconds(seconds, options = {})
	
**seconds**: Number

**options**: Object containing any combination of the following options:

 - **hours_padding:** Integer
 - **minutes_padding:** Integer
 - **seconds_padding:** Integer
 - **seconds_decimal_places:** Integer
 - **decimal_symbol:** String (default 
