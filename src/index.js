module.exports = function check(str, bracketsConfig) {
    let boolean1 = false;
    let increment1 = 0;
    let increment2 = 0;
    let increment3 = 0;
    let increment4 = 0;
    let arr = str.split("");
    for(let i = 0;i<bracketsConfig.length;i++){
        for(let j = 0;j<2;j++){
        if(bracketsConfig[i][j] == '(')
        increment1++;
        if(bracketsConfig[i][j] == '{')
        increment2++;
        if(bracketsConfig[i][j] == '[')
        increment3++;
        if(bracketsConfig[i][j] == '|')
        increment4++;
        }
     }
   for(let i = 0;i<arr.length;i++){
      if(increment1>0){
      if(((arr[i] == '(')&&(arr[arr.length - 1 - i] ==')'))||((arr[i] == '('))&&(arr[i+1] == '('))
      boolean1 = true;
      }
      if(increment2>0){
      if(((arr[i] == '{')&&(arr[arr.length - 1 - i] =='}'))||((arr[i] == '{'))&&(arr[i+1] == '}'))
      boolean1 = true;
      }
      if(increment3>0){
      if(((arr[i] == '[')&&(arr[arr.length - 1 - i] ==']'))||((arr[i] == '['))&&(arr[i+1] == ']'))
      boolean1 = true;
      }
      if(increment4>0){
      if(((arr[i] == '|')&&(arr[arr.length - 1 - i] =='|'))||((arr[i] == '|'))&&(arr[i+1] == '|'))
      boolean1 = true;
      }
   }
   return boolean1;// your solution
}
