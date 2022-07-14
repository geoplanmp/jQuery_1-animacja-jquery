$(document).ready(function() {
    const button = $('<button>Animate</button>');
    $('body').prepend(button);

    const square = $('<div></div>')
    $('button').after(square);

    $('div').css({
        'height': '200px',
        'width': '200px',
        'background-color': 'red',
        'position': 'absolute',
    });


    $('button').attr('id', 'main-button');
    $('div').attr('id', 'main-square');


    $('#main-button').click(function() {
        $('#main-square').animate({ left: '100px', height: '100px', width: '100px' }, 3000, function() {
            $(this).css({
                backgroundColor: 'blue',
                transition: '5s',
            });

            const h2 = $('<h2>Animacja zakończona</h2>');
            $(this).prepend(h2);
            $('h2').css({
                'color': 'white',
                'font-size': '1.2em',
                'text-align': 'center',                
            }).hide(0).show(6000);
        });
    });
});