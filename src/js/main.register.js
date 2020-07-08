require.config({
    paths: {
        jquery: './jquery.min',
        register: './lib/register'
    }
});

require(['register'], function(register) {
    register.check();
    register.reg_check();
});