(function(){
  'use strict';


 angular.module('ShoppingListCheckOff',[])
 .controller('ToBuyController',ToBuyController)
 .controller('AlreadyBoughtController',AlreadyBoughtController)
 .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

 ToBuyController.$inject = ['ShoppingListCheckOffService'];
 function ToBuyController (ShoppingListCheckOffService){
    var buyList = this;
    if (!ShoppingListCheckOffService.getBoughtItems().length > 0) {
         buyList.boughtMessage =  "Nothing bought yet ";
    }


    buyList.items = ShoppingListCheckOffService.getToBuyItems();
    buyList.buyItem = function(itemIndex){
    ShoppingListCheckOffService.addToBoughtItem(itemIndex);
    ShoppingListCheckOffService.removeItem(itemIndex);
    if (!ShoppingListCheckOffService.getBoughtItems().length > 0) {
         buyList.boughtMessage =  "Nothing bought yet ";
    }
    if (!ShoppingListCheckOffService.getBoughtItems().length > 0) {
         buyList.boughtMessage =  "Nothing bought yet ";
    }else{

       buyList.boughtMessage =  ""
    }

    if (!buyList.items.length > 0) {
      buyList.emptyMessage =  "Everything is bought!";
    }



 }

 }

 AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
 function AlreadyBoughtController (ShoppingListCheckOffService){
    var boughtList = this;
boughtList.items = ShoppingListCheckOffService.getBoughtItems();
console.log(boughtList.items);



 }

function ShoppingListCheckOffService(){
   var service = this;
   // List of shopping items

     var shoppingList = [
       {
         name: "Milk",
         quantity: "2"
       },
       {
         name: "Donuts",
         quantity: "200"
       },
       {
         name: "Cookies",
         quantity: "300"
       },
       {
         name: "Chocolate",
         quantity: "5"
       }
     ];

   var items =  shoppingList;
   var toBuy = items;
   var bought = [];

    service.getToBuyItems = function(){
      return toBuy;
    }

    service.getBoughtItems = function(){
      return bought;
    }
    service.removeItem = function(itemIndex){
       toBuy.splice(itemIndex,1);

    }
   service.addToBoughtItem = function(itemIndex){
   var itemBought = toBuy[itemIndex];
   bought.push(itemBought);
   }


}


})();
