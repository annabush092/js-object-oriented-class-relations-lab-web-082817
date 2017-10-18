store = {'drivers': [], 'passengers': [], 'trips': []}

let driverId = 1
class Driver {
  constructor(name) {
    this.name = name
    this.id = driverId++
    store.drivers.push(this)
  }
  trips() {
    return store.trips.filter(
      function(tr) {
        return tr.driverId = this.id
      }.bind(this))
  }
  passengers() {
    const pIds = this.trips().map(
      function(tr) {
        return tr.passengerId
      }
    )
    return store.passengers.filter(
      function(p) {
        return pIds.includes(p.id)
    })
  }
}

let passengerId = 1
class Passenger {
  constructor(name) {
    this.name = name
    this.id = passengerId++
    store.passengers.push(this)
  }
  trips() {
    return store.trips.filter(
      function(tr) {
        return tr.passengerId = this.id
      }.bind(this))
  }
  drivers() {
    const dIds = this.trips().map(
      function(tr) {
        return tr.driverId
      }
    )
    return store.drivers.filter(
      function(d) {
        return dIds.includes(d.id)
    })
  }
}

let tripId = 1
class Trip {
  constructor(driver, passenger) {
    this.id = tripId++
    if(!!driver) {this.driverId = driver.id}
    if(!!passenger) {this.passengerId = passenger.id}
    store.trips.push(this)
  }
  driver() {
    return store.drivers.find(
      function(dr) {
        return dr.id === this.driverId
      }.bind(this)
    )
  }
  passenger() {
    return store.passengers.find(
      function(p) {
        return p.id === this.passengerId
      }.bind(this)
    )
  }
}
