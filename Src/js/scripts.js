
"use strict";


function showCoffeeGoods(){

    let elem = document.getElementById("coffee-rangeofgoods01");
    let parent = document.getElementById("food-coffee");
    let tmp_elem;

    for (let index = 2; index < 10; index++) {
        let clone = elem.cloneNode(true);
        clone.id="coffee-rangeofgoods"+("0000"+index).substr(-2);

        clone.querySelector(".goods_head").querySelector(".good_pic").querySelector(".good_pic .good_pic_logo").src="img/goods/coffee/coffee"+("000"+index).substr(-3)+".jpg";
  
        tmp_elem = clone.querySelector(".goods_head").querySelector(".good_title");
        console.log(clone.querySelector(".goods_head").querySelector(".good_title").textContent);
        clone.querySelector(".goods_head").querySelector(".good_title").textContent="Сорт кофе "+("000"+index).substr(-3); 

        
        parent.appendChild(clone); 
         
    }

}

function showTeaGoods(){

    let elem = document.getElementById("tea-rangeofgoods01");

    let parent = document.getElementById("food-tea");
    let tmp_elem;

    for (let index = 2; index < 7; index++) { 
        let clone = elem.cloneNode(true);
        clone.id="tea-rangeofgoods"+("0000"+index).substr(-2);

        clone.querySelector(".rangeofgoods .teatilepic").src="img/goods/tea/tea_cup"+("000"+index).substr(-3)+".jpg"; 

        tmp_elem = clone.querySelector(".goods_head").querySelector(".good_title");
        console.log(clone.querySelector(".goods_head").querySelector(".good_title").textContent);
        clone.querySelector(".goods_head").querySelector(".good_title").textContent="Сорт чая "+("000"+index).substr(-3); 

        
        parent.appendChild(clone); 
         
    }

}


function ShowSouvenirsGoods(){

    let elem = document.getElementById("souvenirs001");

    let parent = document.getElementById("food-souvenirs");
    let tmp_elem;

    for (let index = 2; index < 7; index++) { 
        let clone = elem.cloneNode(true);
        clone.id="souvenirs"+("0000"+index).substr(-3);

        clone.querySelector(".rangeofgoods .teatilepic").src="img/goods/souvenirs/souvenirs"+("000"+index).substr(-3)+".jpg"; 

        tmp_elem = clone.querySelector(".goods_head").querySelector(".good_title");
        //console.log(clone.querySelector(".goods_head").querySelector(".good_title").textContent);
     /*    clone.querySelector(".goods_head").querySelector(".good_title").textContent="Сорт чая "+("000"+index).substr(-3);  */

        
        parent.appendChild(clone); 
         
    }

}