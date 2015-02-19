exports.createWindow = function(args){
    photoview = Widget.createController('photoview', args);
    photoview.on('click', onClick);
    return photoview.getView();
};

exports.setData = function(args){
    photoview.setData(args);
};

function onClick(e){
    $.trigger('click', e);
}
