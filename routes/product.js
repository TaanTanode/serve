const express = require('express')
const router = express.Router()
// Controllers
const { create,
    list,
    read,
    update,
    remove,
    listby,
    searchFilters,
    createImages,
    removeImage
} = require("../controllers/product")
const { authCheck, adminCheck } = require('../middlewares/authCheck')

//@ENDPOINT http://localhost:5000/api/product

router.post('/product', create)//เพิ่มสินค้า
router.get('/products/:count', list)//เวลากดว่าเอากี่ชิ้น แบบเอาแค่ 5 ก็ส่งมาแค่ 5
router.get('/product/:id', read)
router.put('/product/:id', update)
router.delete('/product/:id', remove)//สินค้าแยกเข้าไปดูสินค้า แบบจากหน้ารวมสินค้าทั้งหมด
router.post('/productby', listby)//sort สินค้า
router.post('/search/filters', searchFilters)

router.post('/images', authCheck, adminCheck, createImages)
router.post('/removeimages', authCheck, adminCheck, removeImage)



module.exports = router