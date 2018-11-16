const storage = new class {
  constructor() {
    this.state = {
      service_status: {
        server: this.getServiceStatus("server"),
        storage: this.getServiceStatus("storage")
      }
    }
  }

  getServiceStatus(service_name) {
    const status = JSON.parse(localStorage.getItem("misoten-service-status"));
    return service_name in status ? status[service_name] : false;
  }

  serviceEnable(service_name) {
    const status = {
      [service_name]: true
    }
    localStorage.setItem("misoten-service-status", JSON.stringify(status));
  }

  serviceStop(service_name) {
    const status = {
      [service_name]: false
    }
    localStorage.setItem("misoten-service-status", JSON.stringify(status));
  }
}
window.storage = storage;
export default storage;