class User{
    constructor(){
        this.optionLine = [
            {
                countOptions:4,
                optionDiv:['message','call','video','mail'],
                divClass:'options-icon',
                spanClass:'icon glyphicon glyphicon-comment',
                spanAriaHidden: 'true',
                additionalSpanClass: 'options-text',
            }
        ];
        this.optionTable = [
            {
                optionItemCount:6,
                divClass:'options-item',
                href:'#',
                items:['Notes','Send message','Share contact','Add to favorites','Share my location','Block this caller']
            }
        ]
    }
    header(){
        return`<header class="header">
		            <div class="container top-radius">
			            <div class="user-top-line">
				            <a href="index.html">
					            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
					             Contacts</a>
					        <a href="edit-contact.html">Edit</a>
				        </div>
			        </div>
		       </header>`
    }
    optionsLineIcons(){
        let layout =``;
        let element = this.optionLine[0];
        for(let i=0;i<element.countOptions;i++){
            layout+=`<div class='${element.optionDiv[i]}'>
						<div class= '${element.divClass}'>
						    <span class='${element.spanClass}' aria-hidden='${element.spanAriaHidden}'></span>
						</div>
						<span class = '${element.additionalSpanClass}'>${element.optionDiv[i]}</span>
					</div>`
        }
        return layout;
    }
    optionsItemsIcons(){
        let layout = ``;
        let element = this.optionTable[0];
        for(let i=0;i<element.optionItemCount;i++){
            layout+=`<div class ='${element.divClass}'><a href='${element.href}'>${element.items[i]}</a></div>`
        }
        return layout;
    }
    optionsLine(){
        return`<div class="options-line">
                ${this.optionsLineIcons()}
               </div>`
    }
    optionsTable(){
        return`<div class="options-table">
                    ${this.optionsItemsIcons()}
               </div>`
    }
    main(){
        return `<main class="main">
                    <div class="container">
                        <img src="images/user-face.png" alt="#" class=" user-img img-circle center-block">
				        <div class="user-name">User Name</div>
				        ${this.optionsLine()}
				        <div class="tel-number">
					        <h3>mobile</h3>
					        <div> +38 (093) 989 89 89</div>
				        </div>
				        <div class="tel-number">
					        <h3>home</h3>
					        <div> +38 (093) 989 89 89</div>
				        </div>
				        ${this.optionsTable()}
                    </div>
                </main>`
    }
    body(){
        return`${this.header()+this.main()}`
    }
    render(){
        let footer = document.body.querySelector('footer');
        footer.insertAdjacentHTML('beforebegin',this.body());
        return this
    }
}
let user = new User();
   user.render();