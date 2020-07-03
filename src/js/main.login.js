require.config({
    paths: {
        jquery: './jquery.min',
        login: './lib/login'
    }
});

require(['login'], function(login) {
    login.check();
});