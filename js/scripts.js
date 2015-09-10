var romanNum = function(num) {
  romanNumerals = [{1000: 'M'},
                    {500: 'D'},
                    {100: 'C'},
                    {50: 'L'},
                    {10: 'X'},
                    {5: 'V'},
                    {1: 'I'}];

  var romanString = new String();

  while(num > 0){

    for (var i = 0; i < romanNumerals.length; ++i) {
      var key = Object.keys(romanNumerals[i])[0];
      if(i !== 0){
        var prevKey = Object.keys(romanNumerals[i-1])[0];
      }
    debugger;
      var dividend = (num / key);
      if (dividend > 1) {
        for (j = 0; j < Math.floor(dividend); ++j) {
          romanString += romanNumerals[i][key];
          num -= key;
        }
      }
      var remainderDiv = (num % key) / key;
      if(remainderDiv >= 0.9 && remainderDiv < 1) {
        if(i % 2 === 0) {
          var nextKey = Object.keys(romanNumerals[i+2])[0];
          romanString += romanNumerals[i + 2][nextKey];
        }
        else {
          var nextKey = Object.keys(romanNumerals[i+1])[0];
          romanString += romanNumerals[i + 1][nextKey];
        }
        romanString += romanNumerals[i][key];
        num -= (key - nextKey);
      }

      if (dividend === 4 ) {
        romanString += romanNumerals[i][key];
        romanString += romanNumerals[i - 1][prevKey];
        num -= (4 * key);
      }
    }
  }
  return romanString;
}
