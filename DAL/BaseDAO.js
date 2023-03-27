class BaseDAO {
    constructor() {
        this.database = localStorage
        this.tableName = undefined
        this.Entity = undefined;
    }

    getAll() {
        let entities = JSON.parse(this.database.getItem(this.tableName)) ?? []
        return entities
    }

    create(entity) {
        let entities = this.getAll()
        entities.push(entity)
        this.database.setItem(this.tableName, JSON.stringify(entities))
    }
}