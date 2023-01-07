let express = require('express');
let calculatorController = require ('../controllers/calculatorController');
let router = express.Router();

router.get('/add/', (req, res) => {
        calculatorController.addNumbers(req,res)
})

router.get('/subtract/', (req, res) => {
    calculatorController.subtractNumbers(req,res)
})

router.get('/multiply/', (req, res) => {
    calculatorController.multiplyNumbers(req,res)
})

router.get('/divide/', (req, res) => {
    calculatorController.divideNumbers(req,res)
})

module.exports = router;

//Below was what I'd done before for exercise 2 & 3
//     console.log(req.query)
//     res.send(req.query)
// })

// router.get('/add', (req, res) => {
//     let number1=parseInt(req.query.num1);
//     let number2=parseInt(req.query.num2);

//     let sum=number1+number2
    
//     console.log(sum)
    
//     res.status(200)
//     res.json({result:sum})
//     })

// router.get('/add1', (req, res) => {
//     let number9=parseInt(req.query.num9);
//     let number10=parseInt(req.query.num10);

//     let sum=number9+number10
    
//     console.log(sum)
    
//     res.status(200)
//     res.json({result:sum})
//     })

// router.get('/subtract', (req, res) => {
//         let number3=parseInt(req.query.num3);
//         let number4=parseInt(req.query.num4);
    
//         let sum=number3-number4
        
//         console.log(sum)
        
//         res.status(200)
//         res.json({result:sum})
//         })

// router.get('/subtract1', (req, res) => {
//         let number9=parseInt(req.query.num9);
//         let number10=parseInt(req.query.num10);
        
//         let sum=number9-number10
            
//         console.log(sum)
            
//         res.status(200)
//         res.json({result:sum})
//         })

// router.get('/multiply', (req, res) => {
//             let number5=parseInt(req.query.num5);
//             let number6=parseInt(req.query.num6);
        
//             let sum=number5*number6
            
//             console.log(sum)
            
//             res.status(200)
//             res.json({result:sum})
//             })

// router.get('/multiply1', (req, res) => {
//             let number9=parseInt(req.query.num9);
//             let number10=parseInt(req.query.num10);

//             let sum=number9*number10
            
//             console.log(sum)
            
//             res.status(200)
//             res.json({result:sum})
//             })

// router.get('/divide', (req, res) => {
//                 let number7=parseInt(req.query.num7);
//                 let number8=parseInt(req.query.num8);
            
//                 let sum=number7/number8
                
//                 console.log(sum)
                
//                 res.status(200)
//                 res.json({result:sum})
//                 })

// router.get('/divide1', (req, res) => {
//                 let number9=parseInt(req.query.num9);
//                 let number10=parseInt(req.query.num10);
            
//                 let sum=number9/number10
                
//                 console.log(sum)
                
//                 res.status(200)
//                 res.json({result:sum})
//                 })

