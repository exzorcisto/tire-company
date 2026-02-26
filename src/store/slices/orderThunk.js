import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const sendOrder = createAsyncThunk(
  'cart/sendOrder',
  async (orderData, { rejectWithValue }) => {
    try {
      // Имитируем запрос
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', orderData);
      return response.data;
    } catch (err) {
      return rejectWithValue('Ошибка при отправке заказа');
    }
  }
);