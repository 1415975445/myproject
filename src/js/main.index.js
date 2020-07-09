require.config({
    paths: {
        jquery: './jquery.min',
        index: './lib/index',
        slider:'./vmc.slider.full.min'
    },
    shim:{}
});

require(['index','slider'], function(index,slider) {
    index.render();
    // index.slider();
});
