import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Grid,
  FormControl,
  Slider,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import MenuCard from "../../atoms/MenuCard";
import { menuItems } from "./mockData";
import { categories } from "../../../constants/stringConstants";

interface MenuItemType {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string[];
}

interface MenuItemsProps {
  selectedItems: MenuItemType[];
  onSelect: (item: MenuItemType) => void;
  onNext: () => void;
}

const MenuItems: React.FC<MenuItemsProps> = ({
  selectedItems,
  onSelect,
  onNext,
}) => {
  const maxPrice = Math.max(...menuItems.map((item) => item.price));

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<number[]>([0, maxPrice]);
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

  const filteredItems = menuItems.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory.length > 0
        ? selectedCategory.some((category) => item.category.includes(category))
        : true;
    const matchesPrice =
      item.price >= priceRange[0] && item.price <= priceRange[1];

    return matchesSearch && matchesCategory && matchesPrice;
  });

  const handlePriceChange = (event: Event, newValue: number | number[]) => {
    setPriceRange(newValue as number[]);
  };

  const handleQuantityChange = (id: number, increment: boolean) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.max((prevQuantities[id] || 0) + (increment ? 1 : -1), 0),
    }));
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((cat) => cat !== category)
        : [...prevCategories, category]
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        pl: 3,
        mt: 10,
      }}
    >
      <Box
        sx={{
          width: "75%",
          overflowY: "auto",
          height: "48vh",
        }}
      >
        <Grid container spacing={2}>
          {filteredItems.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.id}>
              <MenuCard
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
                category={
                  Array.isArray(item.category) ? item.category : [item.category]
                }
                quantity={quantities[item.id] || 0}
                onQuantityChange={(increment) =>
                  handleQuantityChange(item.id, increment)
                }
                onAddToCart={() => {
                  const quantity = quantities[item.id] || 1;
                  alert(`${quantity} x ${item.name} added to cart`);
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box
        sx={{
          width: "20%",
          mx: 2,
          mb: -7,
          p: "20px 20px 20px 20px",
          border: "2px solid red",
          borderRadius: 4,
          height: "40vh",
        }}
      >
        <Typography variant="h6" sx={{ mb: 1 }}>
          Filter Options
        </Typography>
        <TextField
          label="Search"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{
            mb: 2,
            height: "40px", // Adjust the height as needed
            borderRadius: "12px", // Increase the border radius
            "& .MuiOutlinedInput-root": {
              borderRadius: "12px", // Ensure the input has the same border radius
              "& fieldset": {
                borderRadius: "12px", // Ensure the outline has the same border radius
              },
              "&:hover fieldset": {
                borderColor: "orange", // Optional: Change border color on hover
              },
            },
            "& .MuiInputBase-input": {
              padding: "10px 12px", // Add padding to center the placeholder
              textAlign: "center", // Center the text (including placeholder)
            },
            "& .MuiInputBase-input::placeholder": {
              textAlign: "center", // Center the placeholder text
            },
          }}
        />

        <Typography variant="h6">Price Range</Typography>
        <Box sx={{ mx: 1 }}>
          <Typography>
            Rs.{priceRange[0]} - Rs.{priceRange[1]}
          </Typography>
          <Slider
            value={priceRange}
            onChange={handlePriceChange}
            valueLabelDisplay="auto"
            max={maxPrice}
            min={0}
            sx={{
              mb: 2,
              "& .MuiSlider-thumb": {
                height: 20,
                width: 20,
                boxShadow: "0px 2px 2px 0px rgba(0,0,0,0.2)",
                border: "2px solid orange",
                backgroundColor: "orange", // Border color
                borderRadius: "50%", // Rounded thumbs
                "&:first-of-type": {
                  borderColor: "orange",
                },
                "&:last-of-type": {
                  borderColor: "red",
                  backgroundColor: "red", // Right thumb border color
                },
              },
              "& .MuiSlider-track": {
                background: "linear-gradient(to right, orange, red)",
                borderColor: "transparent", // Remove the track border
              },
              "& .MuiSlider-rail": {
                backgroundColor: "#f11818aa", // Light grey for the rail
              },
            }}
          />
        </Box>
        <Typography variant="h6">Categories</Typography>
        <FormControl>
          <FormGroup>
            <Grid container>
              {categories.map((category) => (
                <Grid item xs={4} key={category}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedCategory.includes(category)}
                        onChange={() => handleCategoryChange(category)}
                        name={category}
                        sx={{
                          "&.Mui-checked": {
                            color: "transparent", // Hide default tick color
                            "&:before": {
                              content: '""', // Create a pseudo-element for gradient
                              display: "block",
                              position: "absolute",
                              width: "40%",
                              height: "40%",
                              border: "2.5px solid #363431",
                              background:
                                "linear-gradient(to right, orange, red)", // Gradient for checked state
                              borderRadius: "15%",
                              opacity: 0.7, // Adjust opacity as needed
                            },
                            "&:after": {
                              content: '"✓"', // Show tick mark
                              position: "absolute",
                              color: "#fff", // Tick color
                              fontSize: "0.8rem", // Adjust size as needed
                              left: "50%", // Center the tick
                              top: "50%",
                              transform: "translate(-50%, -50%)", // Center adjustment
                              zIndex: 1,
                              fontWeight: "bold", // Bold tick mark
                            },
                          },
                          position: "relative", // Relative positioning for the checkbox
                        }}
                      />
                    }
                    label={category}
                  />
                </Grid>
              ))}
            </Grid>
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};

export default MenuItems;
