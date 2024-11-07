export type BookingDataType = {
  tableNumber: number;
  tableType: string;
  tablePrice: number;
  numberOfChairs: number;
  selectedDate: string;
  startTime: string | null;
  endTime: string | null;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  numberOfPeople: number;
  address: string;
  cartItems: {
    id: number;
    name: string;
    quantity: number;
    price: number;
  }[];
};
