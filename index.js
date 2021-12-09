function timeConversion(s) {
    let array = s.slice(0,8).split(':');
    array[0] = (s.indexOf('PM') )?
 (array[0] ===  12 ? '12' : Number(array[0]) + 12) : (array[0] === 12 ? '00' :array[0])
 return  array.join(':')
}

 console.log(timeConversion('09:00:00PM'))