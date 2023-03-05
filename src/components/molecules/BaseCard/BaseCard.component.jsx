import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import IconButton from "@mui/joy/IconButton";
import Link from "@mui/joy/Link";
import Favorite from "@mui/icons-material/Favorite";

const MOCK_URL =
  "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318";

export default function BaseCard({
  imgUrl,
  ariaLabel,
  title,
  origin,
  views,
  lastViewed,
}) {
  return (
    <Card variant="outlined" sx={{ width: 320 }}>
      <CardOverflow>
        <AspectRatio ratio="2">
          <img src={imgUrl || MOCK_URL} srcSet={imgUrl} loading="lazy" alt="" />
        </AspectRatio>
        <IconButton
          aria-label={ariaLabel || "no label"}
          size="md"
          variant="solid"
          color="danger"
          sx={{
            position: "absolute",
            zIndex: 2,
            borderRadius: "50%",
            right: "1rem",
            bottom: 0,
            transform: "translateY(50%)",
          }}
        >
          <Favorite />
        </IconButton>
      </CardOverflow>
      <Typography level="h2" sx={{ fontSize: "md", mt: 2 }}>
        <Link href="#multiple-actions" overlay underline="none">
          {title || "Default title"}
        </Link>
      </Typography>
      <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
        <Link href="#multiple-actions">{origin}</Link>
      </Typography>
      <Divider inset="context" />
      <CardOverflow
        variant="soft"
        sx={{
          display: "flex",
          gap: 1.5,
          py: 1.5,
          px: "var(--Card-padding)",
          bgcolor: "background.level1",
        }}
      >
        <Typography
          level="body3"
          sx={{ fontWeight: "md", color: "text.secondary" }}
        >
          {views || "views"}
        </Typography>
        <Divider orientation="vertical" />
        <Typography
          level="body3"
          sx={{ fontWeight: "md", color: "text.secondary" }}
        >
          {lastViewed || "Last Viewed"}
        </Typography>
      </CardOverflow>
    </Card>
  );
}
