var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};

// src/RealEstateCard.tsx
import { useState } from "react";
import {
  Card,
  CardMedia,
  Box,
  Typography,
  Chip,
  Checkbox,
  FormControlLabel,
  TextField,
  Button,
  Rating,
  Switch
} from "@mui/material";
import InfoRounded from "@mui/icons-material/InfoRounded";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { jsx, jsxs } from "react/jsx-runtime";
var RealEstateCard = ({
  imageUrl,
  address,
  priceRange,
  confidenceScore
}) => {
  const [notes, setNotes] = useState("");
  const [checked, setChecked] = useState(false);
  const [rating, setRating] = useState(3);
  const [isMale, setIsMale] = useState(true);
  const handleNoteSubmit = () => {
    console.log("Submitted note:", notes);
  };
  const chipStyles = {
    ".MuiChip-icon": { fontSize: 16, ml: "4px", color: "success.500" },
    bgcolor: "success.50",
    color: "success.900",
    borderColor: "success.100"
  };
  return /* @__PURE__ */ jsxs(
    Card,
    {
      variant: "outlined",
      sx: {
        p: 2,
        display: "flex",
        flexWrap: "wrap",
        zIndex: 1,
        bgcolor: "white"
      },
      children: [
        /* @__PURE__ */ jsx(
          CardMedia,
          {
            component: "img",
            width: "100",
            height: "100",
            alt: `${address} cover`,
            src: imageUrl,
            sx: {
              borderRadius: "6px",
              width: { xs: "100%", sm: 100 }
            }
          }
        ),
        /* @__PURE__ */ jsxs(Box, { sx: { ml: 2, flex: 1, display: "flex", flexDirection: "column", gap: 1 }, children: [
          /* @__PURE__ */ jsx(Typography, { variant: "body2", color: "text.secondary", fontWeight: "regular", children: address }),
          /* @__PURE__ */ jsx(Typography, { fontWeight: "bold", noWrap: true, children: priceRange }),
          /* @__PURE__ */ jsx(
            Chip,
            {
              size: "small",
              variant: "outlined",
              icon: /* @__PURE__ */ jsx(InfoRounded, {}),
              label: `Confidence score: ${confidenceScore}`,
              sx: (theme) => __spreadValues(__spreadValues({}, chipStyles), theme.palette.mode === "dark" ? {
                bgcolor: "primaryDark.700",
                color: "success.200",
                borderColor: "success.900"
              } : chipStyles)
            }
          ),
          /* @__PURE__ */ jsx(
            TextField,
            {
              size: "small",
              label: "Notes",
              variant: "outlined",
              value: notes,
              onChange: (e) => setNotes(e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(
            Button,
            {
              variant: "outlined",
              size: "small",
              onClick: handleNoteSubmit,
              children: "Submit"
            }
          ),
          /* @__PURE__ */ jsx(
            FormControlLabel,
            {
              control: /* @__PURE__ */ jsx(
                Checkbox,
                {
                  checked,
                  onChange: (e) => setChecked(e.target.checked),
                  icon: /* @__PURE__ */ jsx(FavoriteBorder, {}),
                  checkedIcon: /* @__PURE__ */ jsx(Favorite, {})
                }
              ),
              label: "Mark as Favorite"
            }
          ),
          /* @__PURE__ */ jsx(
            Rating,
            {
              value: rating,
              onChange: (event, newValue) => {
                setRating(newValue);
              }
            }
          ),
          /* @__PURE__ */ jsx(
            FormControlLabel,
            {
              control: /* @__PURE__ */ jsx(
                Switch,
                {
                  checked: isMale,
                  onChange: (e) => setIsMale(e.target.checked),
                  color: "primary"
                }
              ),
              label: isMale ? "Man" : "Female"
            }
          ),
          /* @__PURE__ */ jsx(Button, { variant: "contained", size: "small", children: "View Details" })
        ] })
      ]
    }
  );
};
var RealEstateCard_default = RealEstateCard;
export {
  RealEstateCard_default as RealEstateCard
};
