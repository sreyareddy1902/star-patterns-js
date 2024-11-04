
/*---pattern1
for(let i=1;i<=4;i++)  //i=1;1<=4 ,i=2;2<=4 ,i=3, i=4 ,i=5;5<=4
{
    for(let j=1;j<=4;j++) //j=1;1<=4 ,j=2;2<=4 ,j=3;3<=4 ,j=4;4<=4 ,j=5;5<=4
    {
        document.write("*") 
    }
    document.writeln("<br>")
}
-----*/

/*----pattern2
for(let i=1;i<=4;i++) //i=1;1<=4 ,i=2;2<=4 i=3
{
    for(let j=1;j<=i;j++) //j=1;1<=1 ,j=2;2<=1 ,j=1;1<=2 j=2;2<=2 ,j=3;3<=2
    {
        document.write("*")
    }
    document.write("<br>")
    
} 


*
* *

----*/

/*---pattern2
let star=1 
for(let i=1;i<=4;i++) i=1;1<=4 ,i=2;2<=4  ,i=3;3<=4 ,i=4;4<=4 ,i=5;5<=4
    {
        for(let j=1;j<=star;j++) //j=1;1<=1 ,j=2;2<=1 ,j=1;1<=2 ,j=2;2<=2 j=3;3<=2
        {
            document.write("*")
        }
        document.write("<br>")
        star++ //star=2 ,star=3
        
    }


    //*
    //* *
    //* * *
    //* * * *
    //
-----*/

/*----pattern3
let star=1,space=3
for(let i=1;i<=4;i++)
{
    for(let j=1;j<=space;j++)
    {
        document.writeln("&nbsp;")
    }
    for(let j=1;j<=star;j++)
    {
        document.write("*")
    }
    document.write("<br>")
    star++
    space--
}
----*/

/*----pattern4
for(let i=1;i<=5;i++)
{
    for(let j=1;j<=5;j++)
    {
        if(i==1 || i==5 || j==1 || j==5)
        {
            document.write("*")
        }
        else
        {
            document.writeln("&nbsp;")
        }
    }
    document.write("<br>")
}
----*/

/*---pattern5
for(let i=1;i<=5;i++)
{
    for(let j=1;j<=5;j++)
    {
        if(i==j || (i+j)==6)
        {
            document.write("*")
        }
        else
        {
            document.writeln("&nbsp;")
        }
    }
    document.write("<br>")
}
----*/


/*---pattern6
let star=1,space=2
for(let i=1;i<=3;i++)
{
    for(let j=1;j<=space;j++)
    {
        document.writeln("&nbsp")
    }
    for(let j=1;j<=star;j++)
    {
        if(i==2 && j==3)
        {
            document.writeln("&nbsp;")
        }
        else
        {
            document.write("*")
        }
    }
    document.write("<br>")
    star+=2
    space--
}
----*/

/*---pattern7
let star=1,space=2
for(let i=1;i<=3;i++)
{
    for(let j=1;j<=space;j++)
    {
        document.writeln("&nbsp;")
    }
    for(let j=1;j<=star;j++)
    {
        document.write("*")
    }
    document.write("<br>")
    star+=2
    space--
}
-----*/

/*----pattern8
let star=5,space=0
for(let i=1;i<=3;i++)
{
    for(let j=1;j<=space;j++)
    {
        document.writeln("&nbsp;")
    }
    for(let j=1;j<=star;j++)
    {
        document.write("*")
    }
    document.write("<br>")
    star-=2
    space++
}
-----*/

/*----pattern9
let star=1,space=2
for(let i=1;i<=5;i++)
{
    for(let j=1;j<=space;j++)
    {
        document.writeln("&nbsp;")
    }
    for(let j=1;j<=star;j++)
    {
        document.write("*")
    }
    if(i<3)
    {
        star+=2
        space--
    }
    else
    {
        star-=2
        space++
    }
    document.write("<br>")
}
-----*/

/*----pattern10
for(let i=1;i<=5;i++)
{
    for(let j=1;j<=5;j++)
    {
        if(i==5 || j==1 || i==j)
        {
            document.write("*")
        }
        else
        {
            document.writeln("&nbsp;")
        }
    }
    document.write("<br>")
}
-----*/

/*----pattern11
for(let i=1;i<=5;i++)
{
    for(let j=1;j<=5;j++)
    {
        if( i==3 || j==3 || (i==1 && j<=3) || (j==5 && i<=3) || (j==1 && i>=3) || (i==5 && j>=3))
        {
            document.write("*")
        }
        else
        {
            document.writeln("&nbsp;")
        }
    }
    document.write("<br>")
}
----*/
