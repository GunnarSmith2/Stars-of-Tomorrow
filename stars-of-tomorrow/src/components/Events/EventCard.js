import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import { Button } from "@mui/material";

function Events(props) {
  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        mx: 4,
        marginBottom: 4,
        maxWidth: 213,
        minWidth: 213,
      }}
    >
      <CardActionArea>
        <CardMedia component="img" height="120" src={props.img} />
        <CardContent style={{ backgroundColor: "#121214" }}>
          <Typography
            variant="h5"
            textAlign="center"
            sx={{
              color: "#ffffff",
              fontFamily: "Oswald, sans-serif",
              letterSpacing: ".5px",
              paddingBottom: 1,
              fontWeight: 400,
            }}
          >
            {props.stadium}
          </Typography>
          <Typography
            variant="body1"
            textAlign="center"
            sx={{
              color: "#ffffff",
              fontFamily: "Oswald, sans-serif",
              letterSpacing: ".5px",
              paddingBottom: 0.5,
              fontWeight: 300,
            }}
          >
            {props.city}, {props.state}
          </Typography>
          <Typography
            variant="body1"
            textAlign="center"
            sx={{
              color: "#ffffff",
              fontFamily: "Oswald, sans-serif",
              letterSpacing: ".5px",
              paddingBottom: 0.5,
              fontWeight: 300,
            }}
          >
            {props.date}
          </Typography>
          <Typography
            variant="body1"
            textAlign="center"
            sx={{
              color: "#ffffff",
              fontFamily: "Oswald, sans-serif",
              letterSpacing: ".5px",
              fontWeight: 300,
            }}
          >
            {props.startTime}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Events;
