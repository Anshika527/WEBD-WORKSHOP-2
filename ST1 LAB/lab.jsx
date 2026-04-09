function reverseNum (){
    let num=Number(document.getElementById("numinput").value);
    let rev=0;

    while(num>0){
        let digit=num%10;
        rev=rev*10+digit;
        num=Math.floor(num/10);

    }
    document.getElementById("result").innerHTML="Reversed"+rev;

}