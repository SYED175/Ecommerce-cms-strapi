'use strict';

/**
 * product controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::product.product',({strapi})=>({
    async find(ctx) {
        const { data } = await super.find(ctx);
        const formattedData = data.map(item=>({
                id: item.attributes.pid,
                price: item.attributes.price,
                description: item.attributes.description,
                category: item.attributes.category,
                image: item.attributes.image,
                title: item.attributes.title,
                rating:item.attributes.rating,
                count:item.attributes.count
              })
        );
        
           
        
           
    
        return formattedData;
      },

    async findOne(ctx){
        const { pid } = ctx.params;
        const entity = await strapi.db.query('api::product.product').findOne({
          where: { pid }
        });
    
        if (!entity) {
          return ctx.notFound('Record not found');
        }
    
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
        

        const formattedData ={
            id: sanitizedEntity.pid,
          price: sanitizedEntity.price,
          description: sanitizedEntity.description,
          category: sanitizedEntity.category,
          image: sanitizedEntity.image,
          title: sanitizedEntity.title,
          rate:sanitizedEntity.rating,
          count:sanitizedEntity.count,
        }

      return formattedData;
        // return this.transformResponse(sanitizedEntity);
      
    }
}));
