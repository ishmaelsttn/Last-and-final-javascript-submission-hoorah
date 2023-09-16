function funcAlert()
/*this is an alet using varialbes finding the percentage or muduolo of another number if and or else the number =0*/
{
   alert("the button is pushed");
    /* the variables rannum1 and 2 determine a number that is random which is or below the number 10*/
    var Numerouno = Math.ceil(Math.random()*20);
    var Numerodos = Math.ceil(Math.random()*20);
    /*alert("First num = " + randNum1 + "  Second Num " + randNum2);*/
    var sum = Numerouno+Numerodos;
    var x = Math.ceil(Math.random()*5);
    var y = Math.ceil(Math.random()*5);
    var sum2 = x+y;
    /*here down below the doc.getelement reserves the name in the html for the sum of the variables, it basically says that on the webpage sum = ran1 and 2 being added. These are the fuctions without the alert.*/
    document.getElementById("sumTag").innerHTML = "sum =" + sum;
    document.getElementById("NUMBALETSDOTHIS1").innerHTML = "Numerouno = " + Numerouno;
    document.getElementById("NUMBALETSDOTHIS2").innerHTML = "Numerodos = " + Numerodos;
    if (sum >20) 
    {
        document.getElementById("the sum is").innerHTML = " a greater number";
    } 
    else 
    {
        document.getElementById("NUMBALETSDOTHIS1").innerHTML = "just a random number that doesnt equate greater than 20"; 
    }
    /*down below are the variables being added togther in a statement by inner.html*/
    document.getElementById("secondsum").innerHTML = "sum of x and y =" + sum2;
    document.getElementById("Xvar").innerHTML = "x =" + x;
    document.getElementById("Yvar").innerHTML = "y =" + y;
    if (sum2 >8)
    {
        document.getElementById("the sum is").innerHTML = " greater than 8";
    }
    }