/* global customElements, Audio, HTMLElement */
customElements.define(
  'sound-button',
  class extends HTMLElement {
    // This is a bruh button
    constructor () {
      super()
      const html = `
    <style>
   button {
  padding:1em;
  cursor:pointer;
  background-color:red;
  border-radius: 1em;
  box-shadow:0 9px #ed2939;
     user-select: none; 
  
           border: 0;
      
  font-family:cursive;
      cursor: pointer;
  color:#fff;
   }

   button:active {
       box-shadow:0 5px #ed2939;
       margin-top: 4px;
   }
    </style>
    <button>${this.innerText}</button>
    `

      const shadow = this.attachShadow({ mode: 'open' })
      shadow.innerHTML = html
      this.addEventListener('click', () => {
        new Audio(this.getAttribute('sound')).play()
      }) // play bruh sound

      this.addEventListener('DOMCharacterDataModified', () => {
        this.shadowRoot.querySelector(
          'button'
        ).innerText = this.textContent.trim()
      })
    }
  }
)
