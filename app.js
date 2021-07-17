const buttons = document.querySelectorAll(".item");

let test = false;



buttons.forEach( button =>{
    button.addEventListener("click", (e)=>{
        test = !test
        let value;

        if(test){
            value = "X"
        }else{
            value = 0;
        }

        e.target.innerText = value;
    })
});

const resetBtn = document.getElementById("reset");

resetBtn.addEventListener("click", ()=>{
    const canvas = document.querySelectorAll(".canvas .item");
    canvas.forEach(canva =>  canva.innerText = "")
});