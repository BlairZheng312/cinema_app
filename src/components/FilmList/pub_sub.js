const bus = {
    list: [],
    subscribe(callback) {
        this.list.push(callback)
    },
    publish(data) {
        this.list.forEach((callback) => 
            callback && callback(data)
        )
    }
}

// bus.subscribe(
//     (data) => {
//         console.log(data)
//     }
// )

export default bus