//key: M5NQWzMJMAEm9M9oYdytmZUzCdUn3Zmo
/*
https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=yourkey
https://api.nytimes.com/svc/topstories/v2/home.json?api-key=yourkey
https://api.nytimes.com/svc/topstories/v2/science.json?api-key=yourkey
https://api.nytimes.com/svc/topstories/v2/us.json?api-key=yourkey
https://api.nytimes.com/svc/topstories/v2/world.json?api-key=yourkey
*/ 
var maindiv=document.createElement("div");
maindiv.setAttribute("class","container container-fluid maindiv");

var heading=document.createElement("h1");
heading.setAttribute("class","heading");
heading.innerText="THE PERTINENT TIMES";

var hr1=document.createElement("hr");
var hr2=document.createElement("hr");

var navbar=document.createElement("div");
navbar.setAttribute("class","row");
navbar.setAttribute("id","navbar");

var col1=document.createElement("div");
col1.setAttribute("class","col col-12 col-md-6 col-lg-1");
var home=document.createElement("button");
home.setAttribute("id","home");
home.innerText="HOME";
home.setAttribute("class","btn btn-primary");
home.setAttribute("onclick","changeurl('"+"https://api.nytimes.com/svc/topstories/v2/home.json?api-key=M5NQWzMJMAEm9M9oYdytmZUzCdUn3Zmo"+"')");

var col2=document.createElement("div");
col2.setAttribute("class","col col-12 col-md-6 col-lg-1");
var world=document.createElement("button");
world.setAttribute("id","world");
world.innerText="WORLD";
world.setAttribute("class","btn btn-primary");
world.setAttribute("onclick","changeurl('"+"https://api.nytimes.com/svc/topstories/v2/world.json?api-key=M5NQWzMJMAEm9M9oYdytmZUzCdUn3Zmo"+"')");

var col3=document.createElement("div");
col3.setAttribute("class","col col-12 col-md-6 col-lg-1");
var politics=document.createElement("button");
politics.setAttribute("id","politics");
politics.innerText="POLITICS";
politics.setAttribute("class","btn btn-primary");
politics.setAttribute("onclick","changeurl('"+"https://api.nytimes.com/svc/topstories/v2/politics.json?api-key=M5NQWzMJMAEm9M9oYdytmZUzCdUn3Zmo"+"')");

var col4=document.createElement("div");
col4.setAttribute("class","col col-12 col-md-6 col-lg-1");
var technology=document.createElement("button");
technology.setAttribute("id","technology");
technology.innerText="TECHNOLOGY";
technology.setAttribute("class","btn btn-primary");
technology.setAttribute("onclick","changeurl('"+"https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=M5NQWzMJMAEm9M9oYdytmZUzCdUn3Zmo"+"')");

var col5=document.createElement("div");
col5.setAttribute("class","col col-12 col-md-6 col-lg-1");
var magazine=document.createElement("button");
magazine.setAttribute("id","magazine");
magazine.innerText="MAGAZINE";
magazine.setAttribute("class","btn btn-primary");
magazine.setAttribute("onclick","changeurl('"+"https://api.nytimes.com/svc/topstories/v2/magazine.json?api-key=M5NQWzMJMAEm9M9oYdytmZUzCdUn3Zmo"+"')");

var col6=document.createElement("div");
col6.setAttribute("class","col col-12 col-md-6 col-lg-1");
var science=document.createElement("button");
science.setAttribute("id","science");
science.innerText="SCIENCE";
science.setAttribute("class","btn btn-primary");
science.setAttribute("onclick","changeurl('"+"https://api.nytimes.com/svc/topstories/v2/science.json?api-key=M5NQWzMJMAEm9M9oYdytmZUzCdUn3Zmo"+"')");

var col7=document.createElement("div");
col7.setAttribute("class","col col-12 col-md-6 col-lg-1");
var health=document.createElement("button");
health.setAttribute("id","health");
health.innerText="HEALTH";
health.setAttribute("class","btn btn-primary");
health.setAttribute("onclick","changeurl('"+"https://api.nytimes.com/svc/topstories/v2/health.json?api-key=M5NQWzMJMAEm9M9oYdytmZUzCdUn3Zmo"+"')");

var col8=document.createElement("div");
col8.setAttribute("class","col col-12 col-md-6 col-lg-1");
var sports=document.createElement("button");
sports.setAttribute("id","sports");
sports.innerText="SPORTS";
sports.setAttribute("class","btn btn-primary");
sports.setAttribute("onclick","changeurl('"+"https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=M5NQWzMJMAEm9M9oYdytmZUzCdUn3Zmo"+"')");

var col9=document.createElement("div");
col9.setAttribute("class","col col-12 col-md-6 col-lg-1");
var arts=document.createElement("button");
arts.setAttribute("id","arts");
arts.innerText="ARTS";
arts.setAttribute("class","btn btn-primary");
arts.setAttribute("onclick","changeurl('"+"https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=M5NQWzMJMAEm9M9oYdytmZUzCdUn3Zmo"+"')");

var col10=document.createElement("div");
col10.setAttribute("class","col col-12 col-md-6 col-lg-1");
var fashion=document.createElement("button");
fashion.setAttribute("id","fashion");
fashion.innerText="FASHION";
fashion.setAttribute("class","btn btn-primary");
fashion.setAttribute("onclick","changeurl('"+"https://api.nytimes.com/svc/topstories/v2/fashion.json?api-key=M5NQWzMJMAEm9M9oYdytmZUzCdUn3Zmo"+"')");

var col11=document.createElement("div");
col11.setAttribute("class","col col-12 col-md-6 col-lg-1");
var food=document.createElement("button");
food.setAttribute("id","food");
food.innerText="FOOD";
food.setAttribute("class","btn btn-primary");
food.setAttribute("onclick","changeurl('"+"https://api.nytimes.com/svc/topstories/v2/food.json?api-key=M5NQWzMJMAEm9M9oYdytmZUzCdUn3Zmo"+"')");

var col12=document.createElement("div");
col12.setAttribute("class","col col-12 col-md-6 col-lg-1");
var travel=document.createElement("button");
travel.setAttribute("id","travel");
travel.innerText="TRAVEL";
travel.setAttribute("class","btn btn-primary");
travel.setAttribute("onclick","changeurl('"+"https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=M5NQWzMJMAEm9M9oYdytmZUzCdUn3Zmo"+"')");

var divbody=document.createElement("div");
divbody.setAttribute("class","divbody");
divbody.setAttribute("id","divbody");

col1.appendChild(home);
col2.appendChild(world);
col3.appendChild(politics);
col4.appendChild(technology);
col5.appendChild(magazine);
col6.appendChild(science);
col7.appendChild(health);
col8.appendChild(sports);
col9.appendChild(arts);
col10.appendChild(fashion);
col11.appendChild(food);
col12.appendChild(travel);

navbar.appendChild(col1);
navbar.appendChild(col2);
navbar.appendChild(col3);
navbar.appendChild(col4);
navbar.appendChild(col5);
navbar.appendChild(col6);
navbar.appendChild(col7);
navbar.appendChild(col8);
navbar.appendChild(col9);
navbar.appendChild(col10);
navbar.appendChild(col11);
navbar.appendChild(col12);

maindiv.appendChild(heading);
maindiv.appendChild(hr1);
maindiv.appendChild(navbar);
maindiv.appendChild(hr2);
maindiv.appendChild(divbody);

var url="https://api.nytimes.com/svc/topstories/v2/home.json?api-key=M5NQWzMJMAEm9M9oYdytmZUzCdUn3Zmo"; 

function changeurl(sect)
{

    while(divbody.firstChild)
    {
        divbody.removeChild(divbody.firstChild);
    }
    url=sect;
    getdata();
}

function getdata()
{
    const x=new Promise(function(resolve,reject)
    {
        var request=new XMLHttpRequest();
        //var proxy="https://cors-anywhere.herokuapp.com/"
        request.open('GET',url,true);
        request.send();
        request.onload=function()
        {
            if(request.readyState == 4){
            if(request.status == 200){
            var data=JSON.parse(this.response);
            resolve(data);
            }
        }
        }
    });
    x.then(function(data){
        console.log(url);
        display(data.results,data.section);
    }).catch(function(err){
        console.log("ERROR!");
    });
}

getdata();

function display(data,category)
{
    for(var i=0;i<data.length;i++)
    {
        var imglink=data[i].multimedia[4].url;

        var makecard=document.createElement("div");
        makecard.setAttribute("class","card");
        var cardbody=document.createElement("div");
        cardbody.setAttribute("class","card-body");
        var cardrow=document.createElement("div");
        cardrow.setAttribute("class","row");
        var textcol=document.createElement("div");
        textcol.setAttribute("class","textcol col-12 col-sm-12 col-md-8");
        var imgcol=document.createElement("div");
        imgcol.setAttribute("class","imgcol col-12 col-sm-12 col-md-4");

        var sectioncard=document.createElement("p");
        sectioncard.setAttribute("class","sectioncard");
        sectioncard.innerText=category.toUpperCase();

        var titlecard=document.createElement("p");
        titlecard.setAttribute("class","titlecard");
        titlecard.innerText=data[i].title;

        var datecard=document.createElement("p");
        datecard.setAttribute("class","datecard");
        datecard.innerText=data[i].published_date;

        var abstractcard=document.createElement("p");
        abstractcard.setAttribute("class","abstractcard");
        abstractcard.innerText=data[i].abstract;

        var continuecard=document.createElement("p");
        continuecard.setAttribute("class","continuecard");
        var continuelink=document.createElement("a");
        continuelink.setAttribute("href",data[i].url);
        continuelink.innerText="Continue Reading >>";

        var imgcard=document.createElement("img");
        imgcard.setAttribute("class","img-thumbnail imgcard");
        imgcard.setAttribute("src",imglink);

        textcol.appendChild(sectioncard);
        textcol.appendChild(titlecard);
        textcol.appendChild(datecard);
        textcol.appendChild(abstractcard);
        continuecard.appendChild(continuelink);
        textcol.appendChild(continuecard);
        cardrow.appendChild(textcol);
        imgcol.appendChild(imgcard);
        cardrow.appendChild(imgcol);
        cardbody.appendChild(cardrow);
        makecard.appendChild(cardbody);
        divbody.appendChild(makecard);
    }
}


document.body.appendChild(maindiv);