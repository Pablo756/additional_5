
  // your solution
    module.exports = function check(str, bracketsConfig) {

        let brackets = str.split('');
        let arr = [];

        if (str.length % 2 !== 0)
            return false;


        for (let i = 0; i < str.length; i++) {
            for (let j = 0; j < bracketsConfig.length; j++) {
                if ((brackets[i] === bracketsConfig[j][1]) && (arr[arr.length - 1] === bracketsConfig[j][0]))
                    arr.pop();
                else if (brackets[i] === bracketsConfig[j][0])
                    arr.push(brackets[i]);
            }
        }
        return arr.length === 0;
    }

