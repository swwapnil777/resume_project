const homeController = ((req, res) => {
    res.render('home', { 'tittle': 'home' })
})

export { homeController };