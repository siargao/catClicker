//this will be the data of our cat
const model = {
    currentCat: null,
    cats:[
        {
            name: 'Clothes Line',
            url:'https://farm1.staticflickr.com/155/354864230_a8fe1fe864_z.jpg?zz=1',
            clickCount: 0
        },

        {
            name: 'Snow Hunter',
            url:'https://c1.staticflickr.com/6/5204/5271395372_bb7e60dcaf_b.jpg' ,
            clickCount: 0
        },
        {
            name: 'Blue eyes kitty',
            url:'https://c1.staticflickr.com/7/6059/6262552465_e53bccbd52_b.jpg' ,
            clickCount: 0
        },
        {
            name: 'Couching',
            url:'https://pbs.twimg.com/media/DaiHivnX0AALglq.jpg' ,
            clickCount: 0
        },
        {
            name: 'Bright eyes',
            url:'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg' ,
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

        adminView.hide();

        name.value = model.cats[0].name
        imageUrl.value = model.cats[0].url
        noOfClicks.value = model.cats[0].clickCount

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
            
            //this is an IIFE 
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
        this.catImage.src = currentCat.url
        this.clickCount.textContent = currentCat.clickCount
    },

};

const admin = document.getElementById('admin')
const name = document.getElementById('name')
const imageUrl = document.getElementById('imageUrl')
const noOfClicks = document.getElementById('noOfClicks')
const showAdmin = document.getElementById('showAdmin')
const cancel = document.getElementById('cancel')


const adminView = {
    hide: function(){
        admin.style.display = 'none'
    },

    show: function(){
        admin.style.display = 'block'
    }

};

showAdmin.addEventListener('click',function(){
         //call the function which shows our labels and inputbox
        adminView.show();
});

cancel.addEventListener('click',function(){
   adminView.hide();
});


octopus.init();


