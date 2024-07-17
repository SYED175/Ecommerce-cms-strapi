module.exports = {

    routes:[
        {
            method:'GET',
            path:'/products/pid/:pid',
            handler:'product.findOne',
            config:{
                auth:false,
            }
        }
    ]
}