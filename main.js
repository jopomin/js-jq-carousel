$(document).ready(function() {
    $('.next').click(
        function() {
            nextPic();
            nextSpot();
        }
    )

    $('.prev').click(
        function() {
            prevPic();
            prevSpot()
        }
    )
})

function nextPic() {
    var activeImage = $('img.active');
    activeImage.removeClass('active');
    if (activeImage.hasClass('last')) {
        $('img.first').addClass('active');
    }
    else {
    activeImage.next('img').addClass('active');
    }
}

function nextSpot() {
    var activeSpot = $('i.active');
    activeSpot.removeClass('active');
    if (activeSpot.hasClass('last')) {
        $('i.first').addClass('active');
    }
    else {
    activeSpot.next('i').addClass('active');
    }
}

function prevPic() {
    var activeImage = $('img.active');
    activeImage.removeClass('active');
    if (activeImage.hasClass('first')) {
        $('img.last').addClass('active');
    }
    else {
    activeImage.prev('img').addClass('active');
    }
}

function prevSpot() {
    var activeSpot = $('i.active');
    activeSpot.removeClass('active');
    if (activeSpot.hasClass('first')) {
        $('i.last').addClass('active');
    }
    else {
    activeSpot.prev('i').addClass('active');
    }
}

