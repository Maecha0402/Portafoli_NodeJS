import { Router } from "express"
const router = Router()
//Enrutamiento
router.get('/', (req, res) => res.render('index', { title: 'KM'}))
router.get('/contact', (req, res) => res.render('contact', { title: 'KM'}))

export default router