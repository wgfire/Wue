module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins:[
    [
        "import",
        {
            "libraryName": "wue",
            "libraryDirectory": "components",
            "style": true
          }
    ],
    [
      "component",
      {
       
        "libraryName": "wue",
        "libDir": "components"
      }
    ]
  ]
}
