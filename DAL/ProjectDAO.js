class ProjectDAO extends BaseDAO {
    constructor() {
        super()
        this.Entity = Project
        this.tableName = 'projects'
    }

    

    find(id) {
        let projects = this.getAll()
        for (let i in projects) {
            let project = projects[i]
            if (project.id == id) {
                return project
            }
        }

        return {}
    }

    

    update({ id, name, description }) {
        let projects = this.getAll()
        for (let i in projects) {
            let project = projects[i]
            if (project.id == id) {
                obj = {
                    id: id,
                    name: name,
                    description: description,
                }
                projects[i] = obj
            }
        }

        return true
    }
}