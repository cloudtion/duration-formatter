
function timeFromSeconds(input_seconds, options = {}){

    input_seconds = parseFloat(input_seconds);

    const is_negative = input_seconds < 0;

    if( is_negative ){

        input_seconds *= -1;
    }

    const options_sum = {
        hours_padding: 2,
        minutes_padding: 2,
        seconds_padding: 2,
        seconds_decimal_places: 0,
        decimal_symbol: '.',
        output_template: (hours, minutes, seconds)=> `${ hours }:${ minutes }:${ seconds }`,
        ...options
    }

    const decimal_mult = ( options_sum.seconds_decimal_places===0? 1 : 10**options_sum.seconds_decimal_places );

    const calculated = {
        hours: '' + Math.floor(input_seconds / 3600),
        minutes: '' + Math.floor( (input_seconds %= 3600) / 60),
        seconds: '' + ( Math.round( (input_seconds %= 60) * decimal_mult ) / decimal_mult )
    }

    const dc_split = calculated.seconds.split(options_sum.decimal_symbol);

    calculated.hours = calculated.hours.padStart(options_sum.hours_padding, '0');
    calculated.minutes = calculated.minutes.padStart(options_sum.minutes_padding, '0');
    calculated.seconds = calculated.seconds.replace(dc_split[0], dc_split[0].padStart(options_sum.seconds_padding, '0'));


    if( dc_split[1] ){

        calculated.seconds = calculated.seconds
                                       .replace('.'+dc_split[1], '.'+dc_split[1].padEnd(options_sum.seconds_decimal_places, '0'))
                                       .replace('.', options_sum.decimal_symbol);

    }else if( !calculated.seconds.includes('.') && options_sum.seconds_decimal_places > 0 ){

        calculated.seconds += options_sum.decimal_symbol.padEnd(options_sum.seconds_decimal_places+1, '0');
    }


    return (is_negative? '- ' : '' )+options_sum.output_template(calculated.hours, calculated.minutes, calculated.seconds, calculated.fractional_seconds);
}



function secondsFromTime(input_time, options = {}){


    const options_sum = {
        decimal_symbol: '.',
        ...options
    }

    const regex = new RegExp(`^(?:-[ ]?)?([0-9]+):([0-9]+):([0-9]+([\\${options_sum.decimal_symbol}][0-9+]*)?)$`);

    const match = (input_time+'').match(regex);

    if( match ){

        const [, hours, minutes, seconds] = match;

        return ( ( parseInt(hours)*3600 ) + ( parseInt(minutes)*60 ) + parseFloat(seconds) ) * (input_time.trim().startsWith('-')? -1 : 1);
 
    }else{

        console.error('Input time doesn\'t match requried pattern.');
    }
}

	

module.exports = {
    timeFromSeconds,
    secondsFromTime
}