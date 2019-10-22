var myData=[];

/*
function getPosts()
{
   var req= new XMLHttpRequest();

req.open("get","https://jsonplaceholder.typicode.com/posts");

req.send();
req.onload= function()
{
    if(req.status==200)
        {
            myData=req.response;
        }

}


}

*/

var term="mosalah";

$("#userInput").keyup(function(){
    
    $(this).val();
    
    
    var getPosts = new Promise(function(resolved,rejected){
    
 var req= new XMLHttpRequest();

req.open("get","https://newsapi.org/v2/everything?q="+term+"&from=2019-09-14&sortBy=publishedAt&apiKey=ea533cf2077b45f79439be5237c9004a");

req.send();
req.onload= function()
{
    if(req.status==200)
        {
            
            resolved(JSON.parse (req.response))
             myData=req.response;
        }
    else if(req.status==404)
        {
            var err="page not found";
            rejected(err)
        }
    
    else(req.status==403)
        {
            var err="requst forbidden";
            rejected(err)
        }
}
})

    
getPosts.then(
                           
    function(d)

      {
       myData=d.articles; 
       displayData();
      }
     ,
    
    function(er)

      {
        console.log(er)
      }

)                           
                           
                           
                           
function displayData()
{
     var temp="";
    for(var i=0;i<myData.length;i++)
        {
            temp+="<div class='col-md-4'><h3>"+myData[i].title+"</h3><img src='"+myData[i].urlToImage+"' class='img-fluid'/></div>"
        }
    
    document.getElementById("hatelData").innerHTML=temp;
}

    
})



