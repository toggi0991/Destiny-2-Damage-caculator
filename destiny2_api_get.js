var apikey = "ff2dfdcb8d5c4ee2b5c0f9f1fb5d2a9e";

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.bungie.net/platform/Destiny/Manifest/InventoryItem/1274330687/", true);
xhr.setRequestHeader("X-API-Key", apikey);

xhr.onreadystatechange = function(){
    if(this.readyState === 4 && this.status === 200){
        var json = JSON.parse(this.responseText);
        console.log(json.Response.data.inventoryItem.itemName);
        console.log("sucess if");
    }else{
        console.log("not if");
    }
}