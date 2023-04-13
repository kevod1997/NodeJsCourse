Middlewares 
    Es una funcion/clase que esta entre medio de otros middlewares 
    Deriva del patron de arquitectonico de pipeline, donde por un "lado" ingresa la peticion y por el otro "sale" la respuesta luego de ser procesada. Cada fragmento contribuye a los fragmentos siguientes 


Modelos 

Instancias

const product = new Product("Samsung", "A35")//Aplica el filtro


const product = new Product // NO aplica los filtros
        (product.isNew = true)
product.brand = "samsung"
product.model = "A35"
product.precio = 120000

product.save() //el primer save lo guarda/crea en la bbdd
        (product.isNew = false)


product.category = "smartphone" 

product.save() //los demas save lo modifican en la bbdd

-----------------------------------------------------------------;

const product = Product.find({_id: "a908b709ab70a9b709ab70a9"})
            (product.isNew = false)
product.brand // Samsung
product.price = 140000
product.save() //update

-----------------------------------------------------------------;
product.delete() //se borra de la DDBB




Metodos estaticos 
Product.create({model: "a35", brand: "Samsung"}) //Aplica los filtros del modelo  
Product.find()
Product.findOne()
Product.update()
Product.delete()

Product.findOneAndUpdate()
Product.updateOrFail()


