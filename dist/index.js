"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
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
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  RealEstateCard: () => RealEstateCard_default
});
module.exports = __toCommonJS(index_exports);

// src/RealEstateCard.tsx
var import_react = require("react");
var import_material = require("@mui/material");
var import_InfoRounded = __toESM(require("@mui/icons-material/InfoRounded"));
var import_FavoriteBorder = __toESM(require("@mui/icons-material/FavoriteBorder"));
var import_Favorite = __toESM(require("@mui/icons-material/Favorite"));
var import_jsx_runtime = require("react/jsx-runtime");
var RealEstateCard = ({
  imageUrl,
  address,
  priceRange,
  confidenceScore
}) => {
  const [notes, setNotes] = (0, import_react.useState)("");
  const [checked, setChecked] = (0, import_react.useState)(false);
  const [rating, setRating] = (0, import_react.useState)(3);
  const [isMale, setIsMale] = (0, import_react.useState)(true);
  const handleNoteSubmit = () => {
    console.log("Submitted note:", notes);
  };
  const chipStyles = {
    ".MuiChip-icon": { fontSize: 16, ml: "4px", color: "success.500" },
    bgcolor: "success.50",
    color: "success.900",
    borderColor: "success.100"
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_material.Card,
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
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_material.CardMedia,
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
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_material.Box, { sx: { ml: 2, flex: 1, display: "flex", flexDirection: "column", gap: 1 }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_material.Typography, { variant: "body2", color: "text.secondary", fontWeight: "regular", children: address }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_material.Typography, { fontWeight: "bold", noWrap: true, children: priceRange }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_material.Chip,
            {
              size: "small",
              variant: "outlined",
              icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_InfoRounded.default, {}),
              label: `Confidence score: ${confidenceScore}`,
              sx: (theme) => __spreadValues(__spreadValues({}, chipStyles), theme.palette.mode === "dark" ? {
                bgcolor: "primaryDark.700",
                color: "success.200",
                borderColor: "success.900"
              } : chipStyles)
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_material.TextField,
            {
              size: "small",
              label: "Notes",
              variant: "outlined",
              value: notes,
              onChange: (e) => setNotes(e.target.value)
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_material.Button,
            {
              variant: "outlined",
              size: "small",
              onClick: handleNoteSubmit,
              children: "Submit"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_material.FormControlLabel,
            {
              control: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                import_material.Checkbox,
                {
                  checked,
                  onChange: (e) => setChecked(e.target.checked),
                  icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_FavoriteBorder.default, {}),
                  checkedIcon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_Favorite.default, {})
                }
              ),
              label: "Mark as Favorite"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_material.Rating,
            {
              value: rating,
              onChange: (event, newValue) => {
                setRating(newValue);
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_material.FormControlLabel,
            {
              control: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                import_material.Switch,
                {
                  checked: isMale,
                  onChange: (e) => setIsMale(e.target.checked),
                  color: "primary"
                }
              ),
              label: isMale ? "Man" : "Female"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_material.Button, { variant: "contained", size: "small", children: "View Details" })
        ] })
      ]
    }
  );
};
var RealEstateCard_default = RealEstateCard;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  RealEstateCard
});
