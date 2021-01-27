$(document).ready(function(){
  
  // GENERAL
  
    var theme = $("#theme");
    $("#to-green").click(function(){
      theme.attr("href", "css/green.css")
    });
    $("#to-red").click(function(){
      theme.attr("href", "css/red.css")
    });
    $("#to-blue").click(function(){
      theme.attr("href", "css/blue.css")
    });
  
    //Login Falso
  
    $("#login form").submit(function(){
      var form_name = $("#form_name").val();
      localStorage.setItem("form_name", form_name);
    });
    
    var form_name = localStorage.getItem("form_name"); //Esto pasa cuando se recarga la pagina porque no esta adentro de ningun evento
    if (form_name != null && form_name != undefined) {
      var about_parrafo = $("#about p");
      $("#about p").html("<br><strong>Bienvenido, " + form_name + "</strong><br><br>");  
      about_parrafo.append("<a href='#' id='logout'>Cerrar Sesión</a>");
      $("#login").hide();
  
      $("#logout").click(function(){
        localStorage.clear();
        location.reload();
      });
    }
    if (window.location.href.indexOf('index') > -1) {
      //Slider
      $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        responsive: true
      });    

    //Posts
      var posts = [
        {
          title:'Prueba de titulo 1',
          date: 'Publicado el dia ' + moment().format("DD/MM/YYYY"),
          content: 'El Lorem Ipsum fue concebido como un texto de relleno, formateado de una cierta manera para permitir la presentación de elementos gráficos en documentos, sin necesidad de una copia formal. El uso de Lorem Ipsum permite a los diseñadores reunir los diseños y la forma del contenido antes de que el contenido se haya creado, dando al diseño y al proceso de producción más libertad.'
        },
        {
          title:'Prueba de titulo 2',
          date: 'Publicado el dia ' + moment().format("DD/MM/YYYY"),
          content: 'El Lorem Ipsum fue concebido como un texto de relleno, formateado de una cierta manera para permitir la presentación de elementos gráficos en documentos, sin necesidad de una copia formal. El uso de Lorem Ipsum permite a los diseñadores reunir los diseños y la forma del contenido antes de que el contenido se haya creado, dando al diseño y al proceso de producción más libertad.'
        },
        {
          title:'Prueba de titulo 3',
          date: 'Publicado el dia ' + moment().format("DD/MM/YYYY"),
          content: 'El Lorem Ipsum fue concebido como un texto de relleno, formateado de una cierta manera para permitir la presentación de elementos gráficos en documentos, sin necesidad de una copia formal. El uso de Lorem Ipsum permite a los diseñadores reunir los diseños y la forma del contenido antes de que el contenido se haya creado, dando al diseño y al proceso de producción más libertad.'
        },
        {
          title:'Prueba de titulo 4',
          date: 'Publicado el dia ' + moment().format("DD/MM/YYYY"),
          content: 'El Lorem Ipsum fue concebido como un texto de relleno, formateado de una cierta manera para permitir la presentación de elementos gráficos en documentos, sin necesidad de una copia formal. El uso de Lorem Ipsum permite a los diseñadores reunir los diseños y la forma del contenido antes de que el contenido se haya creado, dando al diseño y al proceso de producción más libertad.'
        },
        {
          title:'Prueba de titulo 5',
          date: 'Publicado el dia ' + moment().format("DD/MM/YYYY"),
          content: 'El Lorem Ipsum fue concebido como un texto de relleno, formateado de una cierta manera para permitir la presentación de elementos gráficos en documentos, sin necesidad de una copia formal. El uso de Lorem Ipsum permite a los diseñadores reunir los diseños y la forma del contenido antes de que el contenido se haya creado, dando al diseño y al proceso de producción más libertad.'
        }
    ];

     posts.forEach((item, index) => {
         var post = `
          <article class ="post">
          <h2> ${item.title}</h2>
          <span class="date">${item.date}</span>
          <p>
            ${item.content}
          </p>
          <a href="#" class="button-more"> Leer más</a>
          </article>`;
         $("#posts").append(post);
     });
    }

        
        //Acordeon.html
        if (window.location.href.indexOf('aboutme') > -1) {        
          $("#acordeon").accordion();
        }

        //Reloj.html
        if (window.location.href.indexOf('reloj') > -1) {        
          
          setInterval(function(){
            var reloj = moment().format("h:mm:ss");
            $("#reloj").html(reloj);
          }, 1000);
        
        }
        
        //contact.html
        if (window.location.href.indexOf('contact') > -1) {        
          
          $("form input[name='date']").datepicker({
            dateFormat: 'dd/mm/yy'
          });
          // Jquery Form Validator
          $.validate({
            lang: 'es',
            errorMessagePosition: 'top',
          });
        };
        
});
