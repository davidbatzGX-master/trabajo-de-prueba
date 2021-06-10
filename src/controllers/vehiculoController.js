const controller = {};

controller.list = (req,res) => {
    req.getConnection((err,conn) => {
        conn.query('SELECT * FROM vehiculos' , (err, marca) =>{
            if(err){
                res.json(err);
            }
            res.render('vehiculovista',{
                data: marca
            });
        });
    });
};
controller.save = (req,res) =>{
    const data = req.body;
    req.getConnection((err, conn)=>{
        conn.query('INSERT INTO vehiculos set ?',[data],(err,rows)=>{
            console.log(rows)
            res.redirect('/');
        });
    })

};

controller.delete = (req,res) =>{
    const id =req.params.id;
   req.getConnection((err, conn)=>{
       conn.query('DELETE FROM vehiculos WHERE id = ?', [id],(err,rows)=>{
           res.redirect('/')
       })
   })

};

controller.edit =(req,res)=>{
    const id =req.params.id;
    req.getConnection((err, conn)=>{
        conn.query('SELECT * FROM vehiculos WHERE id = ?', [id],(err,rows)=>{
            res.render('vehiculo_edit',{
                data : rows [0]
            });
        });
    });
};


module.exports = controller;