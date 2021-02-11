const workboxBuild = require('workbox-build');
const buildSW = () => {
  return workboxBuild.injectManifest({
    swSrc: 'service-worker.js', 
    swDest: 'service-worker.js',
    globDirectory: '../build',
    globPatterns: [
      '**/*.{js,css,html,png,svg}',
    ]
  }).then(({count, size, warnings}) => {
    
    warnings.forEach(console.warn);
    console.log(`${count} files will be precached, totaling ${size} bytes.`);
  });
}

buildSW();