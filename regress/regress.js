function regress(m)
{
    var meanx=0, meany=0, xarray=[], yarray=[], varxarray=[], varyarray=[], ss=0, sp=0, a, b, yact=[], yhat=[], yest=[], yactsum=0, yestsum=0, rsquare;
    for(var i=0; i<m; i++)
    {
        var x=parseInt(document.getElementById("x"+i).value);
        xarray.push(x);
        
        var y=parseInt(document.getElementById("y"+i).value);
        yarray.push(y);
        
    }
    for(var i=0; i<m; i++)
    {
        meanx=meanx+xarray[i];
        meany=meany+yarray[i];
    }
    meanx=meanx/m;
    meany=meany/m;
    for(var i=0; i<m; i++)
    {
        var x=Math.pow((xarray[i]-meanx),2);
        varxarray.push(x);

        var y=(xarray[i]-meanx)*(yarray[i]-meany);
        varyarray.push(y);
    }
    for(var i=0; i<m; i++)
    {
        ss=ss+varxarray[i];
        sp=sp+varyarray[i];
    }
    b=sp/ss;
    a=meany-b*meanx;

    for(var i=0; i<m; i++)
    {
        yact.push(Math.pow((yarray[i]-meany),2));
        yhat.push(a+b*xarray[i]);
        yest.push(Math.pow((yhat[i]-meany),2));
    }

    for(var i=0; i<m; i++)
    {
        yactsum=yactsum+yact[i];
        yestsum=yestsum+yest[i];
    }
    rsquare=yestsum/yactsum;
    //var trace={x: xarray, y: yarray, type: 'scatter'};
    //Plotly.newPlot('div', [trace]);
    document.write("<p>mean of x= "+meanx+"</p><p>mean of y= "+meany+"</p><p>sum of squares= "+ss+"</p><p>sum of products= "+sp+"</p><p>alpha= "+a+"</p><p>beta= "+b+"</p><p>Rsquare= "+rsquare+"</p><p>Regression Equation: Y= "+a+"+"+b+"X");
}
function f(){
var n=document.getElementById("num").value;
var str="<meta name='viewport' content='width=device-width, initial-scale=1'><meta name='viewport' content='width=device-width, initial-scale=1'><link rel='stylesheet' href='style.css'><link rel='stylesheet' type='text/css' href='footer.css'><BODY BGCOLOR='black'><H1>REGRESSLYSER</H1><p>Enter the observation data: </p><p><FORM ID='form2' method='POST'>";
for(var i=0; i<n; i++)
{
    str=str+"<p>x"+i+"=<INPUT ID='x"+i+"' TYPE='NUMBER"+i+"' NAME='x"+i+"'> y"+i+"=<INPUT ID='y"+i+"' TYPE='NUMBER"+i+"' NAME='y"+i+"'></p>";
}
str=str+"<INPUT TYPE='submit' VALUE='Regress' ONCLICK='regress("+n+"); return false'></FORM></p><div class='footer'>&copy AARYAN DEORI</div></BODY>";
document.write(str);
}