import nodemailer from 'nodemailer'
let transmeter=nodemailer.createTransport({
    host:"smtp.gmail.com",
    port:587,
    secure:false,
    auth:{
        user:"faizansari2025@gmail.com",
        pass:"qcse mhre yzvr vghe"
    }
})
export let nodemailerfnc=async(email)=> {
    
    
    
    let code=Math.floor(Math.random()*10000)
    let info=await transmeter.sendMail({
        from:"faizansari2025@gmail.com",
        to:"faizansa5050@gmail.com",
        text:code.toString(),
        subject:"this is test email" 
         
    })
}
nodemailerfnc().catch(console.log("error")
)
