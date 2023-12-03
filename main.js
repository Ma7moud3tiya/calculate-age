let dat= new Date();
let day=dat.getDate();
let month=dat.getMonth()+1;
let year=dat.getFullYear();
let capisa=0;
let addDays=0;

console.log(day,month,year);

document.querySelector(".button").onclick=function(){
    let fn=document.querySelector(".firstName").value;
    let sn=document.querySelector(".lastName").value;
    let bs=document.querySelector(".birthDay").value;
    aws(fn,sn,bs);
}
    

aws=function(fn,sn,bs){
        let newBirthDay=bs.split("/");
        for(let i=+newBirthDay[2];i<year;i++){
            if(i%4===0){
                capisa+=1;
            }
        }
        let min=0;
        let max=0;
        if(+newBirthDay[1]>month){
            max=+newBirthDay[1];
            min=month;
        }else{
            min=+newBirthDay[1];
            max=month;
        }
        for(let i=min;i<max;i++){
            if(i%2===1 || i===12 ){
                addDays++;
            }else if(i===2){
                addDays--;
            }
        }
        let newDiv=document.createElement("div");
        newDiv.className="newDiv";
        let newP=document.createElement("p");
        let ptext=document.createTextNode(`
        welcom ${fn} ${sn}
        your age is ${Math.abs(year-+newBirthDay[2])} years ${Math.abs(max-min)} months ${Math.abs(+newBirthDay[0]-day)} days`+"\n"+
        `or ${Math.floor((Math.abs(year-+newBirthDay[2])*12)+Math.abs(max-min)+((Math.abs(+newBirthDay[0]-day))+capisa+addDays)/30)} months ${((Math.abs(+newBirthDay[0]-day)))%30} days`+"\n"+
        `or ${Math.floor(((Math.abs(year-+newBirthDay[2])*365)+((Math.abs(max-min)*30))+(Math.abs(+newBirthDay[0]-day))+capisa+addDays)/7)} weaks ${(((Math.abs(year-+newBirthDay[2])*365)+((Math.abs(max-min)*30))+(Math.abs(+newBirthDay[0]-day))+capisa+addDays)%7)} days`+"\n"+
        `or ${(Math.abs(year-+newBirthDay[2])*365)+((Math.abs(max-min)*30))+(Math.abs(+newBirthDay[0]-day))+capisa+addDays} days`+"\n"+
        `or ${((Math.abs(year-+newBirthDay[2])*365)+((Math.abs(max-min)*30))+(Math.abs(+newBirthDay[0]-day))+capisa+addDays)*24} hours`+"\n"+
        `or ${(((Math.abs(year-+newBirthDay[2])*365)+((Math.abs(max-min)*30))+(Math.abs(+newBirthDay[0]-day))+capisa+addDays)*24)*60} minutes`+"\n"+
        `or ${(((Math.abs(year-+newBirthDay[2])*365)+((Math.abs(max-min)*30))+(Math.abs(+newBirthDay[0]-day))+capisa+addDays)*24)*3600} secound`);

        newP.appendChild(ptext);
        newDiv.appendChild(newP);
        document.body.appendChild(newDiv);
    }


let user={
    fName:"Mahmoud",
    lName:"Attya",
    age:23,
    getInformation:function(){
        return`hello ${user.fName} ${user.lName}, your age with days is ${user.age*365}`;
    }
}
console.log(user.getInformation());