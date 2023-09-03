let logo=document.querySelector(".gameName");
let next=document.querySelector(".next");
let msg=document.querySelector(".msg")
let btn=document.querySelector(".btn");
let btn1=document.querySelector(".btn1");
let word=document.querySelector(".word1");
const original_words=["Ali","Ahmad","Iqra","Usman","Zain","Babar"]
let in_value=document.querySelector("input")
let play = false;
let neword="";
let randword=""
//roate function
const rotate=()=>{
    logo.style.transform="rotateY(360deg)"
    // setTimeout(()=>{
    //     logo.classList.add("hide");
    //     next.classList.remove("hide");
    // },3000)
}
//word gnerate
const create=()=>{
    let r=Math.floor(Math.random()*original_words.length);
    return original_words[r];
}
//random word making
const scramb=(arr)=>{
    for(let i=arr.length-1;i>=0;i--){
        let temp =arr[i];
        let j= Math.floor(Math.random()*i+1)
        arr[i]=arr[j];
        arr[j]=temp;
    }
    return arr
}
const startup=()=>{
    if(!play){
        play=true;
        // btn.innerHTML="Guess"
            logo.classList.add("hide");
            next.classList.remove("hide");
            btn.classList.add("hide");
            btn1.classList.remove("hide");
            neword=create();
            randword=scramb(neword.split(""))
            randword=randword.join("")
            word.innerHTML=randword
    }
    else{
        let tempword = in_value.value;
        btn1.addEventListener("click",()=>{
            startup();
            if(tempword==neword){
                msg.innerHTML="wow.....! guess the right word";
                btn1.innerHTML="refresh by swaping the screen to play"
            }
            else{
                msg.innerHTML="oohh sorry....! try agian to guess the word " + randword
                btn1.innerHTML="again type your guess and click me"
            }
        })
        
    }

}
//on click button function
const start=()=>{
    rotate();
    
    setInterval(startup,3000)
}

btn.addEventListener("click",start)