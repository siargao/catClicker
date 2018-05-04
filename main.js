//this will be the dtat of our cat
const model = {
    currentCat: null,
    cats:[
        {
            name: 'inBasket',
            filename:'inBasket.png' ,
            clickCount: 0
        },

        {
            name: 'kiki',
            filename:'kiki.png' ,
            clickCount: 0
        },
        {
            name: 'kittenGrey',
            filename:'kittenGrey.png' ,
            clickCount: 0
        },
        {
            name: 'lookUp',
            filename:'lookUp.png' ,
            clickCount: 0
        },
        {
            name: 'sleepingKiki',
            filename:'sleepingKiki.png' ,
            clickCount: 0
        },
    ],
};


//this will connect our View to the Model and vice versa
const octopus = {

    init: function(){
        //initialise the current cat to our first cat our cats array
        model.currentCat = model.cats[0];

        //initialise our listview
        catListView.init();

        //initialise our catView
        catView.init();

    },

    //return our cats array
    getCats: function(){
        return (model.cats)
    },

    getCurrentCat: function(){
        return model.currentCat
    },

    setCurrentCat: function(cat){
        model.currentCat = cat;
    },

    increaseClickCount: function(){
        model.currentCat.clickCount++;
        catView.render();
    }
    
}


//this will manipulate our DOM in the index.html file to create our <li> items
const catListView = {
    
    init:function(){
        this.render();
    },

    render:function(){

        const myUl = document.getElementById('myUlist')
        const cats = octopus.getCats();

        for(let i = 0; i< cats.length; i++){
            //create our <li> item
            const cat = cats[i]
            const list = document.createElement('li')
            list.textContent = cats[i].name
            
            list.addEventListener('click',(function(cat){
                return function(){
                     //set the current cat  on click 
                    octopus.setCurrentCat(cat);
                    //render the current cat on click
                    catView.render();
                };
            })(cat));

            myUl.appendChild(list)
        }
    },

};


//this will manipulate our <img> element in our index.html file
const catView = {

    init: function(){
        this.cat = document.getElementById('cat')
        this.catName = document.getElementById('catName')
        this.clickCount = document.getElementById('clickCount')
        this.catImage = document.getElementById('catImage')
        
        this.catImage.addEventListener('click',function(){
            octopus.increaseClickCount();
        });

        this.render();
    },

    render: function(){
        const currentCat = octopus.getCurrentCat()
        this.catName.textContent = currentCat.name
        this.catImage.src = currentCat.filename
        this.clickCount.textContent = currentCat.clickCount
    },

};

octopus.init();