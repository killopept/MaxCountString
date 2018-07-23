<script>
    function stringCount(checkString) {
        var testString = checkString
        // console.log(testString.length)
        var arr = []
        for(var i = 0;i < testString.length;i++){
            var count = 0
            var index = testString.indexOf(testString.charAt(i))
            while(index !== -1){
                count++
                index = testString.indexOf(testString.charAt(i),index+1)
            }
            arr.push(count)
        }
        //console.log(arr) 每个字符串对应出现的次数
        var stand = arr [0]
        var max = ''
        var maxIndex = ''
        var a = ''
        // console.log(arr)

        
        for(var j = 0;j<arr.length;j++){ //先判断数组是否全等
            if(stand === arr[j]){
                a = 'same'
            }else {
                a = "diff"
                break
            }
        }
        if(a === 'diff') {
            for(var j = 0;j<arr.length;j++){ //找出数组的最大值
                if(stand < arr[j+1]){
                    stand = arr [j+1]
                }else {
                    max = stand
                }
            }
        }else {
            max = a
        }
        // console.log(max) 出现的次数

        var MaxI = '' //找出下标
        for(var v = 0;v<arr.length;v++){
            if(arr[v] === max){
                MaxI = v
            }
        }
        console.log(testString.charAt(MaxI),max)
    }
    stringCount('fdfkljhsaflffffalfffffff')
</script>
