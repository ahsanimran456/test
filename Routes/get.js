const getData = (req, res) => {
    console.log(req.params.Cityname)
    res.send({
        city: req.params.Cityname,
        day: "monday",
        mess: "get data recive",
    })
}

export default getData;