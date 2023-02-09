import {PrismaClient} from "@prisma/client";

export default class Controller {
    constructor(props = {}){
        this.req = props?.req ?? undefined
        this.res = props?.res ?? undefined
        this.prisma = props?.prisma ?? new PrismaClient();
        this.tableName = props?.tableName ?? undefined
        this.value = props?.value ?? null
        this.key = props?.key ?? undefined
        this.fields = props?.fields ?? null
        this.where = props?.where ?? {}
    }

    async _create(){
        try{
            if(!this.tableName) return [ new Error('tableName : table name is not defined')]
            if(typeof(this.fields) !== 'object' && Object.keys(this.fields).length === 0) return [new Error('No data found to save'),null]
            const save = await this.prisma[this.tableName].create({
                data: this.fields
            })
            return [ null, save ]
        }catch(err){
            return [ err, null ]
        }
    }
}