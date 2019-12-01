customElements.define('sound-button', class extends HTMLElement { // This is a bruh button
  constructor() {
    super()
    const text = this.innerText
    let shadow = this.attachShadow({ mode: 'open' })
    shadow.innerHTML = `
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
    <button>${text}</button>
    `

    this.addEventListener('mousedown', () => this.setAttribute('pressed', '')) // add pressed
    this.addEventListener('mouseup', () => this.removeAttribute('pressed')) // remove pressed
    this.addEventListener('click', () => { new Audio(this.getAttribute('sound')).play() }) // play bruh sound
    this.textContent = this.innerText // set the textcontent for the epic :sunglasses:
  }

  get innerText () {
    if (this.shadowRoot)
      return this.shadowRoot.querySelector('button').innerText
    else return this.textContent
  }

  set innerText (val) {
    this.shadowRoot.querySelector('button').innerText = val
    this.textContent = val
  }
}
)