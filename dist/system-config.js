/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
var map = {
    'reward': 'reward',
    'moment': 'vendor/moment/moment.js',
    'lodash': 'vendor/lodash/lodash.js',
    'ts-md5/dist/md5': 'vendor/ts-md5/dist/md5.js',
    'ng2-uploader': 'vendor/ng2-uploader',
    'json5': 'vendor/json5/lib/json5.js',
    'ng2-bootstrap': 'vendor/ng2-bootstrap',
};
/** User packages configuration. */
var packages = {
    'ng2-uploader': {
        main: 'ng2-uploader.js',
        defaultExtension: 'js'
    },
    'ng2-bootstrap': {
        main: 'ng2-bootstrap.js',
        defaultExtension: 'js'
    }
};
////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
var barrels = [
    // Angular specific barrels.
    '@angular/core',
    '@angular/common',
    '@angular/compiler',
    '@angular/http',
    '@angular/router',
    '@angular/router-deprecated',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/upgrade',
    // Thirdparty barrels.
    'rxjs',
    'reward',
];
var cliSystemConfigPackages = {};
barrels.forEach((barrelName) => {
    cliSystemConfigPackages[barrelName] = { main: 'index.js', defaultExtension: 'js' };
});
// Apply the CLI SystemJS configuration.
System.config({
    baseURL: "/rewardredirect/",
    map: {
        '@angular': 'vendor/@angular',
        'rxjs': 'vendor/rxjs',
        'main': 'main.js',
    },
    packages: cliSystemConfigPackages
});
// Apply the user's configuration.
System.config({ map: map, packages: packages });
//# sourceMappingURL=/Users/th/Documents/www/thzs/ng2-reward/tmp/broccoli_type_script_compiler-input_base_path-xEyURD6b.tmp/0/tmp/broccoli_type_script_compiler-input_base_path-xEyURD6b.tmp/0/src/system-config.js.map