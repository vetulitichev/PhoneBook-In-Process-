
class Keypad{
    constructor() {
        this.numberLength = 0;
    }
    test(phoneNumber){

        return phoneNumber;
    }
    header(){
    return  `<header class="header">   
                    <div class="container top-radius">
                         <h2>Keypad</h2>
                    </div>
            </header>`
    }
    mainKeypad(){
        return` <div class="number">
                    <span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                    <span class="numbers" contenteditable="true" ></span>
                    <span class="glyphicon glyphicon-circle-arrow-left" aria-hidden="true" ></span>
                </div>`
    }
    mainButtons(){
        return `<div class="keypad-holder">
    <button class="key">1</button>
    <button class="key">2</button>
    <button class="key">3</button>
    <button class="key">4</button>
    <button class="key">5</button>
    <button class="key">6</button>
    <button class="key">7</button>
    <button class="key">8</button>
    <button class="key">9</button>
    <button class="key">*</button>
    <button class="key">0</button>
    <button class="key">#</button>
    <button class="key"> <span class="glyphicon glyphicon-earphone" aria-hidden="true"></span></button>
   </div>`
    }
    main(){
        return `<main class="main">
                            <div class="container">
                                ${this.mainKeypad()}
                                ${this.mainButtons()}
                            </div>
                      </main>`
    }
    body(){
        return `${this.header()}${this.main()}`
    }
    buttonAction(){
        //----------------------adding numbers using keyboard--------------------------//
        window.addEventListener('keydown', (e)=>{
            if (!e.key.search('Backspace')) {
                let tmp =document.querySelector('span.numbers').textContent;
                tmp = tmp.slice(0,-1);
                document.querySelector('span.numbers').textContent = tmp;
                if(this.numberLength!==0) {
                    this.numberLength--;
                }
            }
        });
        document.body.addEventListener('keydown', (e)=>{
            if (this.numberLength < 10 ) {
                if(e.key.search(/([A-z])|(\+)/)) {
                    let numbers = document.querySelector('.numbers').textContent;
                    numbers += e.key;
                    numbers = numbers.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/g,'($1)$2-$3-$4');
                    document.querySelector('span.numbers').textContent = numbers;
                    this.numberLength++;
                }
             }
        });
        //----------------------adding numbers using buttons--------------------------//
        document.body.addEventListener('click',(e)=>{

            if(e.target.tagName == 'BUTTON') {
                if (this.numberLength < 10) {
                    let numbers = document.querySelector('.numbers').textContent;
                    numbers += e.target.innerText;
                    numbers = numbers.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/g,'($1)$2-$3-$4');
                    document.querySelector('span.numbers').textContent = numbers;
                    this.numberLength++;
                }
            } else if(e.target.className=='glyphicon glyphicon-circle-arrow-left') {
                let tmp =document.querySelector('span.numbers').textContent;
                tmp = tmp.slice(0,-1);
                document.querySelector('span.numbers').textContent = tmp;
                if(this.numberLength!==0) {
                    this.numberLength--;
                }
            }
        });
    }
    render(){
        let footer = document.body.querySelector('footer');
        footer.insertAdjacentHTML('beforebegin',this.body());
    }
}
let keypad = new Keypad();
keypad.buttonAction();