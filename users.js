var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// esto solo realiza el proceso de autentificacion
// pero aun no tiene elementos de seguridad
router.post('/login', (req, res, next)=>{
  //console.log(req.body.email, re.body.passwd);
  usuario.login(req.body.email, req.body.passwd, (e, d)=>{ // req.body.passwd SHA256
    if (d) {
      res.send('login correcto');
      ses=req.session;
      console.log(ses.id);
    }else{
      res.json(e);
    }
  });
});

module.exports = router;
