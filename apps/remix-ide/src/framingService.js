export class FramingService {
  constructor (sidePanel, verticalIcons, mainView, resizeFeature) {
    this.sidePanel = sidePanel
    this.verticalIcons = verticalIcons
    this.mainPanel = mainView.getAppPanel()
    this.mainView = mainView
    this.resizeFeature = resizeFeature
  }

  start (params) {
    this.verticalIcons.select('filePanel')

    document.addEventListener('keypress', (e) => {
      if (e.shiftKey && e.ctrlKey) {
        if (e.code === 'KeyF') { // Ctrl+Shift+F
          this.verticalIcons.select('filePanel')
        } else if (e.code === 'KeyA') { // Ctrl+Shift+A
          this.verticalIcons.select('pluginManager')
        } else if (e.code === 'KeyS') { //  Ctrl+Shift+S
          this.verticalIcons.select('settings')
        }
        e.preventDefault()
      }
    })

    if (params.minimizeterminal) this.mainView.minimizeTerminal()
    if (params.minimizesidepanel) this.resizeFeature.hidePanel()
  }

  embed () {
    this.mainView.minimizeTerminal()
    this.resizeFeature.hidePanel()
  }
}
