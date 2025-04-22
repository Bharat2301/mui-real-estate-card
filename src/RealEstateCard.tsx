'use client';

import React, { useState } from 'react';
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
  Switch,
} from '@mui/material';
import InfoRounded from '@mui/icons-material/InfoRounded';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

export interface RealEstateCardProps {
  imageUrl: string;
  address: string;
  priceRange: string;
  confidenceScore: string;
}

const RealEstateCard: React.FC<RealEstateCardProps> = ({
  imageUrl,
  address,
  priceRange,
  confidenceScore,
}) => {
  const [notes, setNotes] = useState('');
  const [checked, setChecked] = useState(false);
  const [rating, setRating] = useState<number | null>(3);
  const [isMale, setIsMale] = useState(true); // true = Man, false = Female

  const handleNoteSubmit = () => {
    console.log('Submitted note:', notes);
    // You can add logic here to save or send the note somewhere
  };

  const chipStyles = {
    '.MuiChip-icon': { fontSize: 16, ml: '4px', color: 'success.500' },
    bgcolor: 'success.50',
    color: 'success.900',
    borderColor: 'success.100',
  };

  return (
    <Card
      variant="outlined"
      sx={{
        p: 2,
        display: 'flex',
        flexWrap: 'wrap',
        zIndex: 1,
        bgcolor: 'white',
      }}
    >
      <CardMedia
        component="img"
        width="100"
        height="100"
        alt={`${address} cover`}
        src={imageUrl}
        sx={{
          borderRadius: '6px',
          width: { xs: '100%', sm: 100 },
        }}
      />
      <Box sx={{ ml: 2, flex: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Typography variant="body2" color="text.secondary" fontWeight="regular">
          {address}
        </Typography>
        <Typography fontWeight="bold" noWrap>
          {priceRange}
        </Typography>
        <Chip
          size="small"
          variant="outlined"
          icon={<InfoRounded />}
          label={`Confidence score: ${confidenceScore}`}
          sx={(theme) => ({
            ...chipStyles,
            ...(theme.palette.mode === 'dark'
              ? {
                  bgcolor: 'primaryDark.700',
                  color: 'success.200',
                  borderColor: 'success.900',
                }
              : chipStyles),
          })}
        />
        <TextField
          size="small"
          label="Notes"
          variant="outlined"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
        <Button
          variant="outlined"
          size="small"
          onClick={handleNoteSubmit}
        >
          Submit
        </Button>
        <FormControlLabel
          control={
            <Checkbox
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
            />
          }
          label="Mark as Favorite"
        />
        <Rating
          value={rating}
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
        />
        <FormControlLabel
          control={
            <Switch
              checked={isMale}
              onChange={(e) => setIsMale(e.target.checked)}
              color="primary"
            />
          }
          label={isMale ? 'Man' : 'Female'}
        />
        <Button variant="contained" size="small">
          View Details
        </Button>
      </Box>
    </Card>
  );
};

export default RealEstateCard;
