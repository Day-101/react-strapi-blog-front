import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Bienvenue sur The React Strapi Blog !</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Comme son nom l'indique, c'est un blog développé avec React.JS en front-end (saupoudré de Material UI) et une API Strapi en back-end. Le but de ce projet est que les utilisateurs puissent poster des articles et administrer le site uniquement via le front sans passer dans la console Strapi.
            Soyez indulgent, il est en cours de développement.
            Développement en cours : refactorisation et design
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
