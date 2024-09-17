import { Button, Container, Grid, styled, Typography } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import Avatar from "./../../../../assets/images/foterick.jpg";

const Hero = () => {
  const StyledHero = styled("div")(() => ({
    backgroundColor: "black",
    height: "100vh",
  }));

  const StyledImag = styled("img")(() => ({
    width: "100%",
    borderRadius: "50%",
    
  }));

  return (
    <>
    <StyledHero>
      <Container maxWidth="lg">
      <Grid  container spacing={2}>
        <Grid  item xs={12} md={4}>
           <StyledImag src={Avatar} alt="Foto do Herói" />
        </Grid>
        <Grid  item xs={12} md={8}>
          <Typography color="primary" variant="h1" textAlign="center">Erick Francisco</Typography>
          <Typography color="primary" variant="h2"textAlign="center">I'm a Software Engineer</Typography>
          <Grid container display="flex" justifyContent="center">
            <Grid item xs={12} md={4} display="flex" justifyContent="center">
            <Button >
                <DownloadIcon/>
                Download CV
            </Button>
            </Grid>
            <Grid item xs={12} md={4} display="flex" justifyContent="center">
            <Button >
                <EmailIcon/>
                Contact Me
            </Button>
            </Grid>
          </Grid>
          
          
      </Grid>
        </Grid>
      </Container>
      
      
      </StyledHero>
    </>
  );
};

export default Hero;