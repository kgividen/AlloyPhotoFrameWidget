# AlloyPhotoFrameWidget
Photo frame widget for titanium alloy

This was inspired in part by https://github.com/manumaticx/photogrid on how to display and flip through the photos.

### Usage

```javascript
var photoWindow = Alloy.createWidget("AlloyPhotoFrameWidget").createWindow({
    data: data,
    interval: 3000
});

photoWindow.open();
```