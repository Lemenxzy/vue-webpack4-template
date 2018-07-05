const webpackConfig = require('./build/webpack.test.config.js');
const path = require('path');

// Karma configuration
// Generated on Thu Jul 05 2018 10:08:14 GMT+0800 (CST)

module.exports = function(config) {
    config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
        files: [
            'test/unit/**/*.spec.js'
        ],


    // list of files / patterns to exclude
        exclude: [
        ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'test/unit/**/*.spec.js': ['webpack']
        },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['coverage-istanbul'],


    // web server port
        port: 9876,


    // enable / disable colors in the output (reporters and logs)
        colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome', 'ChromeCanary'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
        concurrency: Infinity,

        //webpack配置
        webpack: webpackConfig,
        //https://github.com/istanbuljs/istanbuljs/blob/aae256fb8b9a3d19414dcf069c592e88712c32c6/packages/istanbul-api/lib/config.js#L33-L39
        coverageIstanbulReporter: {
            // https://github.com/istanbuljs/istanbuljs/tree/aae256fb8b9a3d19414dcf069c592e88712c32c6/packages/istanbul-reports/lib
            reports: ['html', 'lcovonly', 'text-summary'],

            // base output directory. If you include %browser% in the path it will be replaced with the karma browser name
            dir: path.join(__dirname, 'coverage'),

            // Combines coverage information from multiple browsers into one report rather than outputting a report
            // for each browser.
            combineBrowserReports: true,

            // if using webpack and pre-loaders, work around webpack breaking the source path
            fixWebpackSourcePaths: true,

            // stop istanbul outputting messages like `File [${filename}] ignored, nothing could be mapped`
            skipFilesWithNoCoverage: true,

            // Most reporters accept additional config options. You can pass these through the `report-config` option
            'report-config': {
                //https://github.com/istanbuljs/istanbuljs/blob/aae256fb8b9a3d19414dcf069c592e88712c32c6/packages/istanbul-reports/lib/html/index.js#L135-L137
                html: {
                    // outputs the report in ./coverage/html
                    subdir: 'html'
                }
            },

            // enforce percentage thresholds
            // anything under these percentages will cause karma to fail with an exit code of 1 if not running in watch mode
            thresholds: {
                emitWarning: false, // set to `true` to not fail the test command when thresholds are not met
                // thresholds for all files
                global: {
                    statements: 100,
                    lines: 100,
                    branches: 100,
                    functions: 100
                },
                // thresholds per file
                each: {
                    statements: 100,
                    lines: 100,
                    branches: 100,
                    functions: 100,
                    overrides: {
                        'baz/component/**/*.js': {
                            statements: 98
                        }
                    }
                }
            },

            verbose: true // output config used by istanbul for debugging
        }
    });
};
