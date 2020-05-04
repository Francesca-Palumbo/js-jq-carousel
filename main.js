//il pulsante next : quando l'utente clicca, deve spostare la classe active all'img successiva

// intercettare il click sulla classe next
$(".next").click(function() {

    //recupero l'immagine che ha la classe active
    var img_corrente = $("img.active");
    // console.log(img_corrente);

    // recupero il pallino img_corrente
    var pallino_corrente = $(".fa-circle.active");

    // tolgo la classe active all'immagine corrente
    img_corrente.removeClass("active");

    // tolgo la classe active al pallino img_corrente
    pallino_corrente.removeClass("active")

    // recupero l'immagine successiva
    var img_successiva = img_corrente.next("img");
    // console.log(img_successiva);

    // recupero il pallino successivo
    var pallino_successivo = pallino_corrente.next(".fa-circle");

    // verifico che esista un'immagine img_successiva
    if(img_successiva.length != 0){
        // c'è un'immagine successiva
        // metto la classe active all'immagine successiva
        img_successiva.addClass("active");
        // metto la classe active al pallino pallino_successivo
        pallino_successivo.addClass("active");
    }else {
        // non c'è un'immagine successiva e faccio ripartire dalla prima img
        img_successiva = $("img:first-child");
        img_successiva.addClass("active");

        // non c'è un pallino successivo -> riparto dal primo
        $(".fa-circle:first-child").addClass("active");
    }
})

// intercettare il click sulla classe prev
$(".prev").click(function() {

    //recupero l'immagine che ha la classe active
    var img_corrente = $("img.active");
    // console.log(img_corrente);

    // recupero il pallino img_corrente
    var pallino_corrente = $(".fa-circle.active");

    // tolgo la classe active all'immagine corrente
    img_corrente.removeClass("active");

    // tolgo la classe active al pallino img_corrente
    pallino_corrente.removeClass("active");

    // recupero l'immagine precedente
    var img_precedente = img_corrente.prev("img");
    // console.log(img_successiva);

    // recupero il pallino precedente
    var pallino_precedente = pallino_corrente.prev(".fa-circle");

    // verifico che esista un'immagine img_precedente
    if(img_precedente.length != 0){
        // c'è un'immagine precedente
        // metto la classe active all'immagine precedente
        img_precedente.addClass("active");
        // metto la classe active al pallino pallino_precedente
        pallino_precedente.addClass("active");
    }else {
        // non c'è un'immagine precedente e faccio ripartire dall'ultima img
        img_precedente = $("img:last-of-type");
        // img_precedente.addClass("active");
        img_precedente.addClass("active");
        // non c'è un pallino successivo -> riparto dal primo
        $(".fa-circle:last-child").addClass("active");
    }
})

// // $( document.body )
//   .click(function() {
//     $( "active" ).append( $( "<img>" ) );
//     var n = $( "img" ).size();
//     $( "active" ).text( "There are " + n + " imgs. Click to add more." );
//   })
//
//   // Trigger the click to start
//   .click();
