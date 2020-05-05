//il pulsante next : quando l'utente clicca, deve spostare la classe active all'img successiva

// intercettare il click sulla classe next
// $(".next").click(function() {
//
//     //recupero l'immagine che ha la classe active
//     var img_corrente = $("img.active");
//     // console.log(img_corrente);
//
//     // recupero il pallino img_corrente
//     var pallino_corrente = $(".fa-circle.active");
//
//     // tolgo la classe active all'immagine corrente
//     img_corrente.removeClass("active");
//
//     // tolgo la classe active al pallino img_corrente
//     pallino_corrente.removeClass("active")
//
//     // recupero l'immagine successiva
//     var img_successiva = img_corrente.next("img");
//     // console.log(img_successiva);
//
//     // recupero il pallino successivo
//     var pallino_successivo = pallino_corrente.next(".fa-circle");
//
//     // verifico che esista un'immagine img_successiva
//     if(img_successiva.length != 0){
//         // c'è un'immagine successiva
//         // metto la classe active all'immagine successiva
//         img_successiva.addClass("active");
//         // metto la classe active al pallino pallino_successivo
//         pallino_successivo.addClass("active");
//     }else {
//         // non c'è un'immagine successiva e faccio ripartire dalla prima img
//         img_successiva = $("img:first-child");
//         img_successiva.addClass("active");
//
//         // non c'è un pallino successivo -> riparto dal primo
//         $(".fa-circle:first-child").addClass("active");
//     }
// })
//
// // intercettare il click sulla classe prev
// $(".prev").click(function() {
//
//     //recupero l'immagine che ha la classe active
//     var img_corrente = $("img.active");
//     // console.log(img_corrente);
//
//     // recupero il pallino img_corrente
//     var pallino_corrente = $(".fa-circle.active");
//
//     // tolgo la classe active all'immagine corrente
//     img_corrente.removeClass("active");
//
//     // tolgo la classe active al pallino img_corrente
//     pallino_corrente.removeClass("active");
//
//     // recupero l'immagine precedente
//     var img_precedente = img_corrente.prev("img");
//     // console.log(img_successiva);
//
//     // recupero il pallino precedente
//     var pallino_precedente = pallino_corrente.prev(".fa-circle");
//
//     // verifico che esista un'immagine img_precedente
//     if(img_precedente.length != 0){
//         // c'è un'immagine precedente
//         // metto la classe active all'immagine precedente
//         img_precedente.addClass("active");
//         // metto la classe active al pallino pallino_precedente
//         pallino_precedente.addClass("active");
//     }else {
//         // non c'è un'immagine precedente e faccio ripartire dall'ultima img
//         img_precedente = $("img:last-of-type");
//         // img_precedente.addClass("active");
//         img_precedente.addClass("active");
//         // non c'è un pallino successivo -> riparto dal primo
//         $(".fa-circle:last-child").addClass("active");
//     }
// })

// setTimeout(function() {
//     var img_corrente = $("img.active");
//     var pallino_corrente = $(".fa-circle.active");
//     img_corrente.removeClass("active");
//     pallino_corrente.removeClass("active")
//     var img_successiva = img_corrente.next("img");
//     var pallino_successivo = pallino_corrente.next(".fa-circle");
//     if(img_successiva.length != 0){
//         img_successiva.addClass("active");
//         pallino_successivo.addClass("active");
//     }else {
//         img_successiva = $("img:first-child");
//         img_successiva.addClass("active");
//         $(".fa-circle:first-child").addClass("active");
//     }
//
// }, 3000);

// setTimeout(function() {
//     // var img_corrente = $("img.active");
//     // var pallino_corrente = $(".fa-circle.active");
//     // img_corrente.removeClass("active");
//     // pallino_corrente.removeClass("active");
//     //
//     // img_successiva.addClass("active");
//     // pallino_successivo.addClass("active");
//
// }, 3000);

// pulsante next: qualndo l'utente clicca, devo spostare la classe active all'img successiva

// intercettare il click sulla classe next
$('.next').click(slide_successiva);

// intercettare il click sulla classe prev
$('.prev').click(slide_precedente);

// imposto l'autoplay
var clock = setInterval(slide_successiva, 3000);

// intercetto il click sul pulsante pausa autolay
$('#pausa').click(function() {
    // interrompo il setInterval
    clearInterval(clock);
    $('#pausa').prop('disabled', true);
});

function slide_successiva() {
    // recupero l'img che ha la classe active in questo momento
    var img_corrente = $('img.active');
    // recupero il pallino corrente
    var pallino_corrente = $('.fa-circle.active');

    // tolgo la classe active all'img corrente
    img_corrente.removeClass('active');
    // tolgo la classe active al pallino corrente
    pallino_corrente.removeClass('active');

    // recupero l'immagine siccessiva
    var img_successiva = img_corrente.next('img');
    // recupero il pallino successivo
    var pallino_successivo = pallino_corrente.next('.fa-circle');

    // verifico che esista un img successiva
    if(img_successiva.length != 0) {
        // c'è un img successiva
        // metto la classe active all'img successiva
        img_successiva.addClass('active');
        // metto la classe active al pallino successivo
        pallino_successivo.addClass('active');
    } else {
        // non c'è un img successiva => riparto dall'inizio
        img_successiva = $('img:first-child');
        img_successiva.addClass('active');

        // non c'è un pallino successivo => riparto dal primo
        $('.fa-circle:first-child').addClass('active');
    }
}

function slide_precedente() {
    // recupero l'img che ha la classe active in questo momento
    var img_corrente = $('img.active');
    // recupero il pallino corrente
    var pallino_corrente = $('.fa-circle.active');

    // tolgo la classe active all'img corrente
    img_corrente.removeClass('active');
    // tolgo la classe active al pallino corrente
    pallino_corrente.removeClass('active');

    // recupero l'immagine precedente
    var img_precedente = img_corrente.prev('img');
    // recupero il pallino precedente
    var pallino_precedente = pallino_corrente.prev('.fa-circle');

    // verifico che esista un img precedente
    if(img_precedente.length != 0) {
        // c'è un img precedente
        // metto la classe active all'img precedente
        img_precedente.addClass('active');

        // metto la classe active al pallino precedente
        pallino_precedente.addClass('active');
    } else {
        // non c'è un img precedente => riparto dalla fine
        img_precedente = $('img:last-of-type');
        img_precedente.addClass('active');

        // non c'è un pallino successivo => riparto dal primo
        $('.fa-circle:last-child').addClass('active');
    }
}
