import {Router, Request, Response} from 'express';

export const router = Router();

router.get('/mutante',(req:Request,res:Response)=>{
    res.json({
        ok:true,
        mensaje: 'todo ok'
    })
});

router.post('/mutante',(req:Request,res:Response)=>{
    const dna=req.body.dna;

    res.json({
        ok:true,
        mensaje: 'POST Ok'
        ,dna
    })
});

router.post('/mutante/:id',(req:Request,res:Response)=>{
    const dna=req.body.dna;
    const id=req.params.id;

    res.json({
        ok:true,
        mensaje: 'POST Ok'
        ,dna
        ,id
    })
});

export default router;