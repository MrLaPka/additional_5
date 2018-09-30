module.exports = function check(str, bracketsConfig) {

let Stack = new Array;

for(let i = 0; i < str.length; i++){
    for (let j = 0; j < bracketsConfig.length; j++) {
        if(str[i] == bracketsConfig[j][0]  && bracketsConfig[j][0] == bracketsConfig[j][1] && bracketsConfig[j][0] == Stack[Stack.length - 1]){
            Stack.pop();
            break;
        }

        if (str[i] == bracketsConfig[j][0]){
            Stack.push(str[i]);
            break;
        }

        if((str[i] == bracketsConfig[j][1])&&(bracketsConfig[j][0] != Stack.pop())){
            return false;
        }
    }
}

if(!Stack.pop()) return true;
else
return false;
}