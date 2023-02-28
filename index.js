const express = require('express')
const app = express()
const cors = require('cors')
const parser = require('body-parser')
const sql = require('msnodesqlv8')

app.use(cors())
app.use(parser.json());
app.use(parser.urlencoded({extended: true}))
const conexion = "server=DESKTOP-2VMTS8V\\SQLEXPRESS;Database=VideoClub02;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}"

app.post('/addClient', (req, res) => {
    const direction = req.body.direction;
    const name = req.body.name;
    const phone = req.body.phone;
    const quantity = req.body.quantity;

    if(direction && name && phone && quantity)
    {
        const query = `exec spNuevoCliente '${name}', '${direction}', ${phone}, ${quantity}, '';`
        console.log(query)
        sql.query(conexion, query, async (err, rows1) => {
            if(err) {
                console.log(err)
                res.status(400).send({"message:":"Bad Request"});
            }else{
                res.send({"message": rows1  })
            }
        });
    }else{
        res.status(400).send({"message": 'Bad Request'})
    }
})

app.post('/addPelicula', (req, res) => {
    const code = req.body.code;
    const movie = req.body.movie;
    const type = req.body.type;
    const price = req.body.price;

    if(code && movie && type && price)
    {
        const query = `exec spNuevaPelicula '${code}', '${movie}', '${type}', ${price};`
        console.log(query)
        sql.query(conexion, query, async (err, rows1) => {
            if(err) {
                console.log(err)
                res.status(400).send({"message:":"Bad Request"});
            }else{
                res.send({"message": rows1  })
            }
            // 
        });
    }else{
        res.status(400).send({"message": 'Bad Request'})
    }

    
})
app.listen(3000, () => {
    console.log("Server runnn  :D in port 3000")
})