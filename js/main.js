$(document).ready(function(){

//Slider

if(window.location.href.indexOf("index") > -1){
    $('.galeria').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 1200
   });
}



//Posts
if(window.location.href.indexOf("index") > -1){
    var posts = [
    {
        title:'Prueba de titulo uno',
        date: moment().format("Do MMMM YYYY"),
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam magni, voluptatibus dolor quibusdam cumassumenda delectus, odit beatae maxime ullam laborum? Eum, laboriosam voluptate facere rem tempora assumenda quisquam magnam voluptatibus dolor quibusdam cumassumenda delectus, odit beatae maxime ullam laborum? Eum, laboriosam voluptate facere rem tempora assumenda quisquam magnam.'
    },
    {
        title:'Prueba de titulo dos',
        date: moment().format("Do MMMM YYYY"),
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam magni, voluptatibus dolor quibusdam cumassumenda delectus, odit beatae maxime ullam laborum? Eum, laboriosam voluptate facere rem tempora assumenda quisquam magnam voluptatibus dolor quibusdam cumassumenda delectus, odit beatae maxime ullam laborum? Eum, laboriosam voluptate facere rem tempora assumenda quisquam magnam.'
    },
    {
        title:'Prueba de titulo tres',
        date: moment().format("Do MMMM YYYY"),
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam magni, voluptatibus dolor quibusdam cumassumenda delectus, odit beatae maxime ullam laborum? Eum, laboriosam voluptate facere rem tempora assumenda quisquam magnam voluptatibus dolor quibusdam cumassumenda delectus, odit beatae maxime ullam laborum? Eum, laboriosam voluptate facere rem tempora assumenda quisquam magnam.'
    },
    {
        title:'Prueba de titulo cuatro',
        date: moment().format("Do MMMM YYYY"),
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam magni, voluptatibus dolor quibusdam cumassumenda delectus, odit beatae maxime ullam laborum? Eum, laboriosam voluptate facere rem tempora assumenda quisquam magnam voluptatibus dolor quibusdam cumassumenda delectus, odit beatae maxime ullam laborum? Eum, laboriosam voluptate facere rem tempora assumenda quisquam magnam.'
    }

    ];
    //Recorro todo el JSON y le voy asignando cada item que deseo mostrar
        posts.forEach((item) => 
        {
            var posteo = `
            <article class="post">
            <h2>${item.title}</h2>
            <span class="date">${item.date}</span>
            <p>${item.content}.</p>
                <a href="#" class="button-more">Leer mas...</a>
            </article>
            `;
            $("#posts").append(posteo);
        });
    };           
    
//Selector de temas
var theme = $("#theme");    
$("#to-green").click(function()
{
    theme.attr("href", "../css/green.css")
});

$("#to-red").click(function()
{
    theme.attr("href", "css/red.css")
});

$("#to-blue").click(function()
{
    theme.attr("href", "css/blue.css")
})

//Scroll
$(".subir").click(function(e){
    e.preventDefault();
    $("html, body").animate({
        scrollTop: 0
    }, 900);
    return false;
});

//Login Falso

$('#login form').submit(function(){
    var form_name=$("#form_name").val();

    localStorage.setItem("Usuario", form_name);
});

var form_name=localStorage.getItem("form_name");

if (form_name != null && form_name != "undefined"){
    var about_p=$('#about p');
    about_p.html('<strong>Bienvenido, '+form_name+'</strong>');
    about_p.append('<a href="#" id="logout">Cerrar sesión</a>');
    $('#login').hide();
    $('#logout').click(function(){
        localStorage.clear();
        location.reload();
    });
};
    
//Sobre mi con estilo acordeon

/////////////////// SI LA PAGINA ABOUT ESTO EXISTIERA ///////////////////////
    if(window.location.href.indexOf("about") > -1){ 
        $("#acordeon").accordion();
    } 

/////RELOJ

if(window.location.href.indexOf("time") > -1){ 
    setInterval(function(){
        var reloj = moment().format('h:mm:ss')
        $("#reloj").html(reloj);
    },1000)

}; 


});