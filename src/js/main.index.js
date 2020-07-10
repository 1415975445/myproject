require.config({
    paths: {
        jquery: './jquery.min',
        index: './lib/index',
        slider:'./vmc.slider.full.min'
    },
    shim:{}
});

require(['index','jquery'], function(index,$) {
    index.render();
    index.search();
});
