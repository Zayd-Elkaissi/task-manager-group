class ProjectService extends BaseService {
    constructor() {
        super()
        this.dao = new ProjectDAO()
    }

    create(project) {
        this.dao.create(project)
    }

    getAll() {
        return this.dao.getAll()
    }

    save(obj) {
        if (!obj.id) {
            this.projectDAO.create(obj)
        } else {
            this.projectDAO.update(obj)
        }
    }

}