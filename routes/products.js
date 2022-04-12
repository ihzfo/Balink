// For the assignement purpose I will mockup the result of a DataBase.

let productDB = [
    {id: 0, name: "P1", descr: "A good product"},
    {id: 1, name: "P2", descr: "A product"},
    {id: 2, name: "P3", descr: "5/5"},
    {id: 3, name: "P4", descr: "4/5"},
    {id: 4, name: "P5", descr: "No Stock left"},
]

// We keep a max ID counter in order to simulate unique id
let aid = 4

module.exports = {

    getProducts : function getProducts(){
        return productDB.map(x => x.name);
    },
    
    getProduct : function getProduct(id){

        for(const product in productDB){
            if(productDB[product].id == id){
                return productDB[product];
            }
        }
        return `No item with ID:${id} found in the catalog`   
    },

    postProduct : function PostProduct(query){
        aid++
        productDB.push({id : aid, name : query.name, descr : query.descr})
        return "200: New product add to DB"
    },

    PutProduct : function PutProduct(query, id){
        let pos = undefined
        for(const product in productDB){
            if(productDB[product].id == id){
                pos = id
                break
            }
        }
        if(!pos){
            return "No item with ID:${id} found in the catalog"
        }
        if(query.name){
            productDB[pos].name = query.name
        }
        if(query.descr){
            productDB[pos].descr = query.descr
        }
        return "200: Product updated"
    },

    deleteProduct : function deleteProduct(id){
        for(const product in productDB){
            if(productDB[product].id == id){
                productDB = productDB.slice(product, 1)
                return "200: Item deleted";
            }
        }
        return `No item with ID:${id} found in the catalog` 
    },
}
