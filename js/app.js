 class Index {
    constructor(){
        this.search ='';
        this.userTable = [
            { name: 'Иван', surname: 'Петров', email: 'IvanPetrov@ec.ua' },
            { name: 'Сергей', surname: 'Сергеев', email: 'SergeiSergeev@ec.ua' },
            { name: 'Иван', surname: 'Иванов', email: 'IvanIvanov@ec.ua' },
            { name: 'Александр', surname: 'Александров', email: 'AlexAlex@ec.ua' },
            { name: 'Алекс', surname: 'Смирнов', email: 'AlexSmirnov@ec.ua' },
            { name: 'Сергей', surname: 'Волков', email: 'VolkovSergey@ec.ua' },
            { name: 'Мария', surname: 'Шарапова', email: 'MariyaSharapova@ec.ua' },
            { name: 'Александр', surname: 'Винник', email: 'AlexVinnik@ec.ua' },
            { name: 'Дарий', surname: 'Смирнов', email: 'DariySmirnov@ec.ua' },
            { name: 'Елена', surname: 'Лещенко', email: 'ElenaLeshenko@ec.ua' },
            { name: 'Ольга', surname: 'Новикова', email: 'OlgaNovikova@ec.ua' },
            { name: 'Наталья', surname: 'Шемякина', email: 'ShemyakinaN@ec.ua' },
            { name: 'Анна', surname: 'Донцова', email: 'AnnaDontsova@ec.ua' },
            { name: 'Влад', surname: 'Яма', email: 'VladYama@ec.ua' },
            { name: 'Кира', surname: 'Воробьева', email: 'Kira1990@ec.ua' },
            { name: 'Виктор', surname: 'Кривенко', email: 'ViktorKriv@ec.ua' },
        ];
        this.tableHead = ['Name','Surname','Email']
    }
    rerender(){
        document.body.querySelector('header').remove();
        document.body.querySelector('main').remove();
    }
     router(){
         let routes = [...document.querySelectorAll('.main-nav>a')];
         for(let i=0;i<routes.length;i++){
             let route = routes[i];
             route.addEventListener('click',(event) =>{
                 event.preventDefault();
                 index.rerender();
                 if (route.getAttribute('href')=='index.html'){
                     index.render();
                 }
                 else if(route.getAttribute('href')=='keypad.html'){
                     keypad.render();
                 }
                 else if(route.getAttribute('href')=='edit-contact.html'){
                     editContact.render();
                 }
                 else if((route.getAttribute('href')=='user.html')){
                     user.render();
                 }else if((route.getAttribute('href')=='add-user.html')){
                     addUser.render();
                 }
             })
         }
         //console.log(routes);
     }
    buttonAction() {
        //удаление через backspace в поиске
        document.body.querySelector('.form-control').addEventListener('keydown',(event)=>{
            if (!event.key.search('Backspace')) {
               this.search = this.search.slice(0,-1);
                let filteredTable = this.userTable.filter(element => {
                    return element.name.search(new RegExp(`^${this.search}`)) !==-1?true:false;
                });
                document.body.querySelector('tbody').innerHTML = this.tbody(filteredTable);
            }
        });
        //ввод через клавиатуру
        document.body.querySelector('.form-group').addEventListener('keydown',(event)=>{
            if(event.key.length==1) {
                this.search += event.key;
                let filteredTable = this.userTable.filter(element => {
                    return element.name.search(new RegExp(`^${this.search}`)) !==-1?true:false;
                });
                document.body.querySelector('tbody').innerHTML = this.tbody(filteredTable);
            }
        });
        //сортировка таблицы
        document.body.querySelector('thead').addEventListener('click', (event) => {
            if (event.target.tagName == 'TH') {
                let target = event.target.textContent.toLowerCase();
                this.userTable.sort((a, b)=> {
                    if(a[target] == b[target]) return 1;
                    return a[target].localeCompare(b[target])
                });
                 document.body.querySelector('tbody').innerHTML = this.tbody(this.userTable);
            }
            if(event.target.tagName == 'input'){

            }
        })
    }
    header(){
        return `<header class = 'header'>
                    <div class="container top-radius">
                        <h2>Contacts</h2>
                    </div>
                </header>`
    }
    tableHeadParse(){
        let layout = ``;
        for(let i=0;i<this.tableHead.length;i++){
            layout+=`<th>${this.tableHead[i]}</th>`
        }
        return layout;
    }
    rowParse(table){
        let layout =``;
        for(let i=0;i<table.length;i++){
            let collectionElement = table[i];
            layout+=`<tr>`;
            for (let item in collectionElement){
                layout+=`<td>${collectionElement[item]}</td>`;
            }
            layout+=`</tr>`;
        }
        return layout;
    }
    thead(){
        return `<thead>
                    <tr>
                        ${this.tableHeadParse()}
                    </tr>
                </thead>`;
    }
    tbody(table){
        return `<tbody>
                    ${this.rowParse(table)}
                </tbody>`;
    }
    table(table){
        return`<table class="table table-hover contacts">
                                    ${this.thead()} 
                                    ${this.tbody(table)}
                            </table>`;
    }
    main(){
        return`<main><div class="container">
                            <form class="form-inline search-form">
                                <div class="form-group">
                                    <label class="sr-only" for="search">Search</label>
                                    <input type="text" class="form-control" value='' id="search" placeholder="Search">
                                </div>
                                ${this.table(this.userTable)}
                            </form>
                            
              </div></main>`
    }
    body(){
        return`${this.header()+this.main()}`;
    }
    render(){
        let footer = document.body.querySelector('footer');
        footer.insertAdjacentHTML('beforebegin',this.body());
        return this
    }
 }
 let index = new Index();
 index.render();
 index.buttonAction();
 index.router();