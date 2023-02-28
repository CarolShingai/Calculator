import calculate from './calculate.js'
import copyToClipboard from './copyToClipboard.js'
import {
  handleButtonPress,
  handleClearButton,
  handleTyping
} from './keysHandlers.js'
import theme from './theme.js'

// Para apertar btn na calculadora
document.querySelectorAll('.charKey').forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener('click', handleButtonPress)
})
document.getElementById('clear').addEventListener('click', handleClearButton)

// Para btn no teclado
document.getElementById('input').addEventListener('keydown', handleTyping)
document.getElementById('equal').addEventListener('click', calculate)
document.getElementById('copy').addEventListener('click', copyToClipboard)

// Switch Theme

document.getElementById('switchTheme').addEventListener('click', theme)
