
# Duration Formatter and Parser

  

Simple duration formatting to turn seconds into strings representing lengths of time.

  

**i.e.**

`timeFromSeconds(5053)` returns `"01:24:13"`

**and vice versa:**

  

`secondsFromTime("01:24:13")` returns `5053`

  
  

## Basic Usage

  


Basic usage is illustrated with just two functions, `timeFromSeconds` and `secondsFromTime`:

    import {timeFromSeconds, secondsFromTime} from 'duration-formatter';
     
    var time_string = timeFromSeconds(5053);
     
    console.log( time_string );
    
    var parsed_seconds = secondsFromTime('01:24:13');
    
    console.log( parsed_seconds );

Which outputs:

    '01:24:13' 
    5053

  
## Using Custom Templates  

By default, ` timeFromSeconds ` returns a string in the format: `[Hours]:[Minutes]:[Seconds]`
 
 This can be changed by passing a function to the ` output_template ` option like so:
 
	var input_time = 5053;
	
    var output_template = (hours,minutes,seconds)=>  hours+'H '+minutes+'M '+seconds+'S';
    var time_str = timeFromSeconds(input_time, { output_template });
    
    console.log(time_str);
  
This outputs the a string in the new output format: `01H 24M 13S` 

To convert strings in your specified format back to a number you can specify the ` template_string ` option to the ` secondsFromTime ` function like so: 

    var template_string = "{H}H {M}M {S}S";
    var seconds = secondsFromTime(time_str, {template_string});

    console.log(seconds);
This outputs the original input time. In this case ` 5053 `.
    
## Functions

  
  

### timeFromSeconds(seconds, options = {})

**seconds**: Number

  

**options**: Object containing any combination of the following options:

  

-  **hours_padding:** Integer (defaults to **2**)

-  **minutes_padding:** Integer (defaults to **2**)

-  **seconds_padding:** Integer (defaults to **2**)

-  **seconds_decimal_places:** Integer (defaults to **0**)

-  **decimal_symbol:** String (defaults to "**,**")

-  **output_template:** Function that takes parameters determines the formatting of the parsed seconds. Defaults to ``(hours, minutes, seconds)=> `${ hours }:${ minutes }:${ seconds }` ``  Note that each parameter is a string, so you will have to parse them to numbers if you wish to combine them.

  

---

### secondsFromTime(time_string, options = {})

**time_string**: String in the format returned by the default output template of `timeFromSeconds `

  

**options**: Object containing any combination of the following options:

  

-  **decimal_symbol:** String (defaults to "**,**")
-  **template_string** String (defaults to "{H}:{M}:{S}")