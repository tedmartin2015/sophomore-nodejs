var gulp = require('gulp');

var nodemon = require('gulp-nodemon');

gulp.task('default', () => {
    return new Promise((resolve, reject) => {
        nodemon({
            script: 'app.js',
            ext: 'js',
            ignore: ['./node_modules/**'],
            env: {
                PORT: 9002
            }
        })
        .on('restart', () => {
            console.log('Restarting from GULP...')
        });
        resolve();
    });  
});