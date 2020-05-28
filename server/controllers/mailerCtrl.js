const nodemailer = require('nodemailer');
const {EMAIL, PASSWORD} = process.env;

module.exports = {
    email: async(req, res) => {
        try {
            
            let transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 587,
                service: 'gmail',
                secure: false,
                requireTLS: true,
                auth: {
                    user: EMAIL,
                    pass: PASSWORD
                }
            });

            let {userEmail, name} = req.body

            let info = await transporter.sendMail({
                from: `The Wine Oh! Team, <${EMAIL}>`,
                to: userEmail,
                subject: `Greetings from Wine Oh, ${name}! `,
               
                text: `Hello, 
                Welcome to Wine Oh! Thank you for becoming a member, we hope you enjoy our site. Feel free to add as many wines to our wine list as you like! Please stay tuned for more, as we continue to improve and add to our site!

                Sincerely, 

                The Wine Oh! Team`,
            
                html: `<div>
                Hello ${name}, 

                <br/>
                <br/>
                Welcome to Wine Oh! Thank you for becoming a member, we hope you enjoy our site. Feel free to add as many wines to our wine list as you like! 
                
                <br/>
                <br/>
                Please stay tuned for more, as we continue to improve and add to our site!

                <br/>
                <br/>

                Sincerely, 

                <br/>
                <br/>

                The Wine Oh! Team
                </div>`
                
            }, (err, res) => {
                if(err){
                    console.log(err)
                } else {
                    res.status(200).send(info);
                }
            })
        } catch(err){
            res.status(500).send(err);
        }
    } 
}
