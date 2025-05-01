function stone()
{
    let num=0;
    let com = Math.floor(Math.random() * 3);
    let arr=[];
    arr[0]="stone";
    arr[1]="paper";
    arr[2]="scissors";
    document.getElementById("user").setAttribute("src","stone.jpeg");
    document.getElementById("computer").setAttribute("src", `${arr[com]}.jpeg`);
    if(arr[num]==arr[com])
    {
       let ans="tie";
      document.getElementById("result").innerHTML=ans;
    }
    else if(arr[com]==="paper")
    {
        let ans="computer wins";
        document.getElementById("result").innerHTML=ans;  
    }
    else{
        let ans="you win";
        document.getElementById("result").innerHTML=ans;  
    }


}

function paper()
{
    let num=1;
    let com = Math.floor(Math.random() * 3);
    let arr=[];
    arr[0]="stone";
    arr[1]="paper";
    arr[2]="scissors";
    document.getElementById("user").setAttribute("src","paper.jpeg");
    document.getElementById("computer").setAttribute("src", `${arr[com]}.jpeg`);

    if(arr[num]==arr[com])
    {
       let ans="tie";
      document.getElementById("result").innerHTML=ans;
    }
    else if(arr[com]==="scissors")
    {
        let ans="computer wins";
        document.getElementById("result").innerHTML=ans;  
    }
    else{
        let ans="you win";
        document.getElementById("result").innerHTML=ans;  
    }


}

function scissors()
{
    let num=2;
    let com = Math.floor(Math.random() * 3);
    let arr=[];
    arr[0]="stone";
    arr[1]="paper";
    arr[2]="scissors";
    document.getElementById("user").setAttribute("src","scissors.jpeg");
    document.getElementById("computer").setAttribute("src", `${arr[com]}.jpeg`);
    if(arr[num]==arr[com])
    {
       let ans="tie";
      document.getElementById("result").innerHTML=ans;
    }
    else if(arr[com]==="stone")
    {
        let ans="computer wins";
        document.getElementById("result").innerHTML=ans;  
    }
    else{
        let ans="you win";
        document.getElementById("result").innerHTML=ans;  
    }


}