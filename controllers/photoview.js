var args = arguments[0] || {},
    data = [];
Ti.API.debug("args in photoview.js: " + JSON.stringify(args));
Ti.API.debug("interval: " + args.interval);

if (_.has(args, 'data')){
    _.each(args.data, function(photo){
        var photoView = Ti.UI.createImageView({
            width: Ti.UI.FILL,
            height: Ti.UI.SIZE,
            image: photo.image
        });
        data.push(photoView);
    });
    
    $.photos.setViews(data);
    
    _.has(args, 'index') && $.photos.setCurrentPage(args.index);
}

function autoScroll() {
    var intCurrentIndex = $.photos.getCurrentPage();
    var intTotalViews = $.photos.getViews().length;
    Ti.API.debug('loop: ' + intCurrentIndex);
    if (intCurrentIndex === (intTotalViews - 1)) {
        intCurrentIndex = 0;
    } else {
        intCurrentIndex = intCurrentIndex + 1;
    }
    $.photos.setCurrentPage(intCurrentIndex);
}

if (_.has(args, 'interval')) {
    var intervalId = setInterval(function () {
        autoScroll();
    }, args.interval);
}


$.photos.addEventListener('click', function(){
    $.photos_win.close();
    if (_.has(args, 'interval')) {
        clearInterval(intervalId);
    }
});