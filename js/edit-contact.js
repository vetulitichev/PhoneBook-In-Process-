class EditContact {
    constructor() {
        this.contactMainContent = ['First Name','Last Name','Company'];
        this.contactAdditionalContent =['Add  home phone','Add email','Add address','Add birthday','Add social profile','Add field'];
    }
    header(){
        return`<header class="header">
		<div class="container top-radius">
			<nav class="user-top-line">
				<a href="user.html">Cansel</a>
				<button  type = "submit" form = "edit-contact" formaction="#" formmethod="get" class = "done-btn">Done</button>
			</nav>
		</div>
	</header>`
    }
    generalInfoFields(){
        let layout =``;
        for(let i=0;i<3;i++) {

            layout+=`<div class="edit-field">
						<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
						<label class="sr-only" for="firstname">${this.contactMainContent[i]}</label>
						<input type="text" class="add-btn" placeholder='${this.contactMainContent[i]}'>
					</div>`
        }
        return layout;
    }
    additionalInfoFields(){
        let element = this.contactAdditionalContent[0];
        let layout =``;
        for(let i=0;i<6;i++){
            layout+=`<div class="edit-field">
						    <span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
						    <label class="sr-only" for="addHomePhone">${this.contactAdditionalContent[i]}</label>
						    <input type="text" class="add-btn"   placeholder='${this.contactAdditionalContent[i]}'>
					</div>`
        }
        return layout;

    }
    main(){
        return`<main class="main">
                    <div class="container">
                        <div class="edit-main-info">
                       <div class="edit-foto"><img src="images/user-face-mini.png" alt="#" class=" user-img img-circle center-block"></div>
                       <div class="main-info-holder">
                            ${this.generalInfoFields()}
                       </div>
                    </div>
                        <div class="scroll-holder">
                            <div class="edit-info">
                               <div class="edit-field">
						            <span class="glyphicon glyphicon-minus-sign" aria-hidden="true"></span>
						                <label class="sr-only" for="deletePhone">Add home phone</label>
						                <input type="text" class="delete-btn" id ="deletePhone" value="+38 (063) 733 44 55" disabled>
					           </div>

                                ${this.additionalInfoFields()}
                                <div class="edit-field">
                                     <button href="#" class="delete-contact">delete contact</button>
                                </div>
                            </div>
                         </div>     
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
let editContact = new EditContact();