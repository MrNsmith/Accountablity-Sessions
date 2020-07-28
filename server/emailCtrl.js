const nodemailer = require('nodemailer'),
    {EMAIL, PASSWORD} = process.env;

module.exports = {
    Email: async(req, res) => {
        const {note,room} = req.body;
        try {
            let transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 587,
                service:'gmail',
                secure: false,
                requireTLS: true,
                auth:{
                    user: EMAIL,
                    pass: PASSWORD
                }
            });
            let info = await transporter.sendMail({
                from:`Game Strengths <${EMAIL}>`,
                to: `nicholas88smith@gmail.com ,  johntestsmith2020@gmail.com`,
                subject:`Game Notes from room ${room}`,
                text:`This is a test ${note}`
                
            },(err, res)=> {
                if(err){
                    console.log(err)
                }else{
                    res.status(200).send(info);
                }
            
             })
        } catch(err){
            res.status(500).send(err);
        }

        
    }
}