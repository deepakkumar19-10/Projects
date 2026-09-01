import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import LightModeIcon from "@mui/icons-material/LightMode";

// Yahan props se { info } receive karein
export default function InfoBox({ info }) {
  const INIT_URL =
    "https://media.istockphoto.com/id/2175083463/photo/new-delhi-delhi-india-fire-truck-spraying-water-over-delhi-streets-amid-pollution-emergency.webp?a=1&b=1&s=612x612&w=0&k=20&c=M-M-0G2h5claKSoJDulPHau74xPvqheMVp7Xg0WjaZ8=";

  let HOT_URL =
    "https://images.unsplash.com/photo-1493936734716-77ba6da66365?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  let COLD_URL =
    "https://plus.unsplash.com/premium_photo-1706625661544-cf6ad6902f57?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
  let RAIN_URL =
    "https://images.unsplash.com/photo-1570651001582-e872dbc2d1b6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFJBSU53ZWF0aGVyfGVufDB8fDB8fHww";

  return (
    <div
      className="InfoBox"
      style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
    >
      <Card sx={{ maxWidth: 345, width: "100%" }}>
        <CardMedia
          sx={{ height: 140 }}
          image={
            info.humidity > 70 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL
          }
          title="weather image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}{" "}
            {info.humidity > 90 ? (
              <ThunderstormIcon />
            ) : info.temp > 40 ? (
              <AcUnitIcon />
            ) : (
              <LightModeIcon />
            )}
          </Typography>
          <Typography variant="body2" color="text.secondary" component="div">
            <div>Temperature = {info.temp}&deg;C</div>
            <div>Humidity = {info.humidity}%</div>
            <p>Min Temp = {info.tempMin}&deg;C</p>
            <p>Max Temp = {info.tempMax}&deg;C</p>
            <p>
              The weather can be described as <i>{info.weather}</i> and feels
              like {info.feelsLike}&deg;C
            </p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
