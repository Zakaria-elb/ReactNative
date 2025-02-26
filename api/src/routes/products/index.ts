import { Router } from 'express';


//Products endpoints
const router = Router();

router.get('/',(req,res)=>{
  res.send('the list of products');
}
);

router.get('/:id',(req,res)=>{
  console.log(req.params);
  res.send('a product');

}
);

router.post('/',(req,res) =>{
  console.log(req.params);
  res.send('new product created');
}
);

export default router;