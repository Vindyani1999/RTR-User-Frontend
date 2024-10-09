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
  Button,
  IconButton,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
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
  quantity?: number;
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
  const [cartItems, setCartItems] = useState<MenuItemType[]>([]); // Store selected items in cart

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

  const addToCart = (item: any) => {
    const quantity = quantities[item.id] || 1;

    const itemWithCategoryAsArray = {
      ...item,
      category: Array.isArray(item.category) ? item.category : [item.category],
      quantity,
    };

    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.name === itemWithCategoryAsArray.name
    );

    if (existingItemIndex >= 0) {
      setCartItems((prevCartItems) =>
        prevCartItems.map((cartItem, index) =>
          index === existingItemIndex
            ? {
                ...cartItem,
                quantity: (cartItem.quantity || 1) + quantity,
              }
            : cartItem
        )
      );
    } else {
      setCartItems((prevCartItems) => [
        ...prevCartItems,
        itemWithCategoryAsArray,
      ]);
    }
  };

  const updateCartQuantity = (id: number, increment: boolean) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(
                (item.quantity || 1) + (increment ? 1 : -1),
                1
              ),
            }
          : item
      )
    );
  };

  const getTotalCost = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * (item.quantity || 1),
      0
    );
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "row", pl: 3, mt: 10 }}>
      {/* Cart Section */}
      <Box
        sx={{
          position: "absolute",
          width: "20%",
          p: 2,
          border: "2px solid gray",
          borderRadius: 4,
          maxHeight: "40vh",
          overflowY: "auto",
          zIndex: 1,
          backgroundColor: "white",
        }}
      >
        <Typography variant="h6">Cart Items</Typography>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <Box
              key={item.id}
              sx={{
                display: "flex",
                alignItems: "center",
                //mb: 2,
                p: 1,
                borderBottom: "1px solid lightgray",
              }}
            >
              <Box
                component="img"
                src={item.image}
                alt={item.name}
                sx={{
                  width: 35,
                  height: 35,
                  borderRadius: "50%",
                  objectFit: "cover",
                  mr: 2,
                }}
              />
              <Box sx={{ flexGrow: 1 }}>
                <Typography sx={{ fontSize: 14 }}>{item.name}</Typography>
                <Typography sx={{ fontSize: 12 }}>
                  {item.quantity} x Rs.{item.price} = Rs.
                  {item.price * (item.quantity || 1)}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <IconButton
                  onClick={() => updateCartQuantity(item.id, false)}
                  size="small"
                >
                  <Remove
                    sx={{
                      fontSize: 14,
                      bgcolor: "orange",
                      borderRadius: "50%",
                      padding: "1px",
                    }}
                  />
                </IconButton>
                <Typography sx={{ mx: 1, fontSize: 12 }}>
                  {item.quantity}
                </Typography>
                <IconButton
                  onClick={() => updateCartQuantity(item.id, true)}
                  size="small"
                >
                  <Add
                    sx={{
                      fontSize: 14,
                      bgcolor: "orange",
                      borderRadius: "50%",
                      padding: "1px",
                    }}
                  />
                </IconButton>
              </Box>
            </Box>
          ))
        ) : (
          <Typography>No items in cart</Typography>
        )}

        {/* Total cost */}
        <Box sx={{ mt: 2, borderTop: "1px solid lightgray", pt: 2 }}>
          <Typography variant="h6">Total: Rs.{getTotalCost()}</Typography>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            onClick={onNext}
          >
            Proceed to Checkout
          </Button>
        </Box>
      </Box>

      {/* Menu Items Section */}
      <Box
        sx={{
          width: "75%",
          overflowY: "auto",
          height: "60vh",
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
                onAddToCart={() => addToCart(item)}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Filter Section */}
      <Box
        sx={{
          width: "20%",
          mx: 2,
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
            height: "40px",
            borderRadius: "12px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "12px",
              "& fieldset": {
                borderRadius: "12px",
              },
              "&:hover fieldset": {
                borderColor: "orange",
              },
            },
            "& .MuiInputBase-input": {
              padding: "10px 12px",
              textAlign: "center",
            },
            "& .MuiInputBase-input::placeholder": {
              textAlign: "center",
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
                backgroundColor: "orange",
                borderRadius: "50%",
              },
              "& .MuiSlider-track": {
                background: "linear-gradient(to right, orange, red)",
                borderColor: "transparent",
              },
              "& .MuiSlider-rail": {
                backgroundColor: "#f11818aa",
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
                            color: "transparent",
                            "&:before": {
                              content: '""',
                              display: "block",
                              position: "absolute",
                              width: "40%",
                              height: "40%",
                              border: "2.5px solid #363431",
                              background:
                                "linear-gradient(to right, orange, red)",
                              borderRadius: "50%",
                              zIndex: 1,
                            },
                          },
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
