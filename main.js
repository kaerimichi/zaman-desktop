const menubar = require('menubar')
const mb = menubar({
  icon: 'icon.png',
  resizable: false,
  width: 320,
  height: 480,
  backgroundColor: '#7d3b8a'
})

mb.on('ready', () => {
  console.log(process.cwd())
})
