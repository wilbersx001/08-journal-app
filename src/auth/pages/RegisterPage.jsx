import { Link as RouterLink} from 'react-router-dom'
import { Google } from "@mui/icons-material"
import { Button, Grid, TextField, Typography, Link } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'


export const RegisterPage = () => {
  return (
    
    <AuthLayout title="Crear cuenta">
         <form>
          <Grid container>
            <Grid item xs={12} sx={{mt: 2}}>
                <TextField 
                label="Nombre completo" 
                type="text" 
                placeholder="Jose Rodriguez Santana"
                fullWidth
                />
            </Grid>

            <Grid item xs={12} sx={{mt: 2}}>
                <TextField 
                label="Correo" 
                type="email" 
                placeholder="micorreo@hotmail.com"
                fullWidth
                />
            </Grid>

            <Grid item xs={12} sx={{mt: 2}}>
                <TextField 
                label="Contraseña" 
                type="password" 
                placeholder="Contraseña"
                fullWidth
                />
            </Grid>

            <Grid container justifyContent="center" spacing={2} sx={{mb: 2, mt: 1}}>
                <Grid item xs={12} sm={6}>
                    <Button variant='contained' fullWidth sx={{ textAlign: 'center' }}>
                      Crear cuenta
                    </Button>
                </Grid>
              </Grid>

              <Grid container direction='row' justifyContent='end' >
                  <Typography sx={{mr: 1}}>Ya tienes una cuenta?</Typography>
                  <Link component={ RouterLink } color='inherit' to="/auth/login">
                    Ingresar
                </Link>
                  
              </Grid>


            </Grid>

        </form>
    </AuthLayout>

  )
}
