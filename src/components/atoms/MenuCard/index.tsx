// MenuCard.tsx (assuming the file path)
import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

interface MenuCardProps {
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
  category: string[];
  onAddToCart: () => void;
  onQuantityChange: (increment: boolean) => void;
}

const MenuCard: React.FC<MenuCardProps> = ({
  name,
  description,
  price,
  image,
  quantity,
  onAddToCart,
  onQuantityChange,
  category,
}) => {
  return (
    <Card
      sx={{
        maxWidth: "250px",
        textAlign: "center",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
        borderRadius: 2,
        backgroundColor: "#f9f9f9",
      }}
    >
      <img
        height="100"
        src={image}
        alt={name}
        style={{ marginTop: 15, borderRadius: 8 }}
      />
      <CardContent sx={{ textAlign: "center" }}>
        <Box sx={{ textAlign: "left" }}>
          <Typography variant="h6">{name}</Typography>
          <Divider sx={{ backgroundColor: "orange", marginY: 1 }} />
          <Typography variant="body2" sx={{ fontSize: "0.8rem", mt: -0.5 }}>
            {description}
          </Typography>
          <Typography variant="body2">
            {category.map((cat, index) => (
              <span
                key={index}
                style={{
                  backgroundColor: "#454141", // dark background color for tag
                  color: "#fff", // text color to white
                  padding: "3px 8px", // padding inside the tag
                  borderRadius: "5px", // rounded corners for tag look
                  marginRight: "5px", // spacing between tags
                  display: "inline-block", // inline-block for tag style
                  opacity: 0.5, // slightly transparent tag
                  fontSize: "0.7rem", // small font size,
                  marginTop: 2,
                }}
              >
                {cat}
              </span>
            ))}
          </Typography>
          <Typography
            sx={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              mt: 1,
            }}
          >
            Rs.{price}
          </Typography>
        </Box>
        {/* Quantity Selector */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            onClick={() => onQuantityChange(false)}
            disabled={quantity === 0}
          >
            <RemoveIcon />
          </IconButton>
          <Typography>{quantity}</Typography>
          <IconButton onClick={() => onQuantityChange(true)}>
            <AddIcon />
          </IconButton>
        </Box>

        <IconButton
          onClick={onAddToCart}
          disabled={quantity === 0}
          sx={{
            textAlign: "center",
            background: "linear-gradient(45deg, darkorange, darkred)", // gradient background
            color: "#fff", // text color white
            padding: "6px 12px", // padding inside the button
            borderRadius: "8px", // rounded corners for button
            boxShadow: "3px 3px 3px rgba(0, 0, 0, 0.2)", // shadow effect
            "&:hover": {
              background: "linear-gradient(45deg, orange, red)", // hover effect
            },
          }}
        >
          <Typography
            variant="button"
            sx={{ display: "flex", alignItems: "center", gap: 1, fontSize: 12 }}
          >
            <ShoppingCartIcon sx={{ fontSize: 18 }} /> {/* Cart icon */}
            Add to Cart
          </Typography>
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default MenuCard;
