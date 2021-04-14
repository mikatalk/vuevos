module.exports = {
  // publicPath: process.env.NODE_ENV === 'production' 
  // ? 'https://vuevos.com/'
  // : `/`,

  // pages: {
  //   index: {
  //     entry: 'main.js'
  //   },
  //   // 'html-css': {
  //   //   entry: 'main.js'
  //   // }
  // },
  filenameHashing: false,

  pluginOptions: {
    baseUrl: '/',
    prerenderSpa: {
      renderRoutes: [
        '/',
        '/html-css',
        '/svg-path',
        '/svg-filter',
        '/canvas-2d',
        '/webgl-2d',
        '/webgl-3d',
      ],
      useRenderEvent: false,
      renderAfterTime: 2500,
      headless: true,
      onlyProduction: true,
      postProcess: route => {
        route.html = route.html
            .replace('</head><body>', 
`<script data-ad-client="ca-pub-9675727214970019" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XFKCM6QVRL"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XFKCM6QVRL');
</script></head><body>`);
        return route;
      }
    }
  }
}
    