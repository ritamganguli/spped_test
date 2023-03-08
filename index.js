const setOfWords=["Hello my name is Ritam","Hello my name is Ritam 1"]
//Sab chizo ko acess karna he
const msg=document.getElementById("msg");
const typeWords=document.getElementById("mywork");
const btn=document.getElementById("btn");
let startTime,endTime;

const playGame=()=>{
    let roundNumber=Math.floor(Math.random()*setOfWords.length);
    msg.innerText=setOfWords[roundNumber];
    let date=new Date();
    startTime=date.getTime();
    btn.innerText="Done";
}

const wordCounter=(str)=>{
    let response=str.split(" ").length;
    console.log(response);
    return response;
}

const endplay=()=>{
    let date=new Date();
    endTime=date.getTime();
    let totalTime=(endTime-startTime)/1000;

    let totalStr=typeWords.value;
    let wordCount=wordCounter(totalStr);
    let speed=Math.round((wordCount/totalTime)*60);

    let finalMsg="You typed at "+speed+" word per minute ";
    finalMsg+=compareWords(msg.innerText,totalStr);
    msg.innerText=finalMsg;
    msg.style.color=white;
}

const compareWords=(str1,str2)=>{
    let words1=str1.split(" ");
    let words2=str2.split(" ");

    let cnt=0;

    words1.forEach(function(item,index){
        if(item==words2[index]){
            cnt++
        }
    })
    let errorWords=(words1.length-cnt);
    return (cnt+" correct out of "+words1.length+" words and the total number of error are "+errorWords+".");
}

btn.addEventListener("click",function(){
    if(this.innerText=='Start'){
        typeWords.disabled=false;
        playGame();
    }else if(this.innerText=='Done'){
        typeWords.disabled=true;
        btn.innerText="Start";
        endplay();
    }
})