import { Typography } from "@mui/material";
import React from "react";
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function RosterCard(props) {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{props.class}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{props.camp_number}</Typography>
          <Typography>
            {props.first}
            {props.last}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
