
var knoppie = $('.thumb .knop');
var button = $('.knopje');
var buttonL = $('.knopjeL');
var streep = $('.streep');
var intro = $('.intro');

$(knoppie).click(function (event) {
    event.preventDefault();

    console.log('klikklik');
    console.log($(this));


    var fullscreen = $(this).parent();
    // var btn = $(this).children(".knopje");

    var url = $(this).attr("href");
    console.log(url);

    $.ajax({
        url: url,

        success: function (data) {
            console.log("ajaxwerkt");

            //--------gesloten
            if (fullscreen.hasClass('page')) {
                fullscreen.removeClass('page');


                setTimeout(function () {
                    fullscreen.css({
                        'z-index': -1,
                        "overflow": "hidden",
                    });

                    //knop
                    button.text("Discover");
                    buttonL.text("More about us").css({
                        "left": "50%"
                    });


                    //tekst links
                    intro.css({
                        "overflow": "hidden",
                        "width": "350px",
                        "display": ""
                    });
                    $('h2.links').css({
                        "width": "350px"
                    });

                    //streep
                    streep.css({
                        "left": "20%",
                        "top": "0",
                        "height": "20%"
                    });
                
                }, 1000);


            } else {
                //---------open
                fullscreen.addClass('page');
                fullscreen.append('<div class="page">' + data + '</div>');

                setTimeout(function () {
                    //knop
                    button.text("Back");
                    buttonL.text("Back").css({
                        "left": "80%"
                    });

                    fullscreen.css({
                        "z-index": "10",
                        "overflow": "visible",
                    });


                    //tekst links
                    intro.css({
                        "width": "535px",
                        "display": "none"
                    });
                    $('h2.links').css({
                        "width": "535px",
                        "padding": "auto",
                        "text-align": "left"
                    });

                    //streep
                    streep.css({
                        "left": "50%",
                        "height": "40%"
                    });
                    $('#streepB').css({
                        "top": "0",
                    })
                }, 1000);


            }



        }


    });
});

