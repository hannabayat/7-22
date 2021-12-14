                                  //==========================print square=============================
function star(num){
    if (typeof(num)!='number'|| num>10)
     return 'wrong';
    for (let i=1;i<=num;i++){
        if (i===1 || i===num) 
        console.log('*'.repeat(num));
        else
         console.log('*'+' '.repeat(num-2)+'*');
    };
};
// star(8)
                                     //--------------- print num--------------------
function copyNumber(number){
    let result=0;
    for (let i=0;i<number; i++);
    {
        result+=((10**i)*number);
    }
    return result;
}
function creatNumber(number){
    if(typeof(number)!='number')
     return 'wrong!';
    let num=number.toString().split('')
    for (let item of num) {
        console.log('%s:',item, copyNumber(item))
    };
}
// creatNumber(123)

                                     //==============reverse string======================
function reversStr(revStr){
    if(typeof(revStr)!='string')
     return 'wrong'
    if (revStr.length===0) return ''
    return revStr[revStr.length-1]+reversStr(revStr.substring(0,(revStr.length)-1))
}
// console.log(reversStr('abcdef')

                                 //============finding string and returniung it =============
function findStr(str1,str2){
    if(str1.length<str2.length || (typeof (str1)!= 'string') ||(typeof (str2)!= 'string') )
     return'wrong!';
    for (let i=0;i<str1.length;i++){
        for(let j=0;j<str2.length;j++ );
        {
            if (str1[i+j]!==str2[j])
             break;
            if (j===(str2.length-1)) 
            return i;
        }
    }
    return '-1';
}
// console.log(findStr('abcdefeb','cde'))
                                   //========removing sesceond elemnt from first array=========
function cleanList(arr1,arr2){
    if (arr1.length<arr2.length)
    return false;
    let result=[...arr1];
    for (let i of arr2){
        if (result.includes(i));
        {
            result.splice(result.indexOf(i),1);
        }
    };
    return result;
}
     let arr1=[2,4,5,6,66,76]
      let arr2=[4,66]
// console.log(cleanList(arr1,arr2))
                              //-------------with mapping-----------------
function cleanList2(arr1,arr2) {
    if (arr1.length < arr2.length)
     return false;
    let result = [...arr1];
    arr2.map(item => {if (result.includes(item)) result.splice(result.indexOf(item),1)})
    return result;
}
 // console.log(cleanList2(arr1,arr2))


                             //============ exaching elemnts in array  ================

function changeArr(arr,index,offset){
    let loc=index+offset;
    if (loc<0 || loc>=arr.length)
     return 'wrong!';
    let n=arr.splice(index,1)
    arr.splice(loc,0,n[0])
    return arr;
}
// console.log(changeArr([1,2,3,4,5],2,-1))

                          //============fixing an array with repetition elements===============
function cleanStr(str){
    if (typeof(str)!='string') 
    return 'wrong!';
    let result=''
    for (let i=0; i<str.length;i++){
        if (str[i]!==str[i+1]) result+=str[i]
    }
    return result;
}

// console.log(cleanStr('aabbsdsa'))