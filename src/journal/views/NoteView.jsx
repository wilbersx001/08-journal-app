
import { SaveOutlined } from '@mui/icons-material';
import {Button, Grid, TextField, Typography} from '@mui/material';
import { ImageGallery } from '../components';


export const NoteView = () => {
    return (
       <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{mb: 1}}> 
            
            <Grid item sx={{marginTop: '50px'}}  >
                <Typography fontSize={35} fontWeight='light'>18 de octubre, 2023</Typography>
            </Grid>

            <Grid item sx={{marginTop: '50px'}} >

                <Button color="primary" sx={{padding: 2}}>
                    <SaveOutlined  sx={{fontsize: 35, mr:1}} />
                    Guardar
                </Button>
            </Grid>

            <Grid container>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder='Ingrese un título'
                    label="Título"
                    sx={{border: 'none', mb: 1}}
                />

                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder='Qué sucedió hoy?'
                    minRows={5}
                />
            </Grid>

            <ImageGallery/>


       </Grid>
    )
  }



