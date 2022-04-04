import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import goalService from './goalService'

const initialState = {
  goals: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create new goal
export const createGoal = createAsyncThunk(
  'goals/create',
  async (goalData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await goalService.createGoal(goalData, token)
    } catch (err) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString()

      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const goalSlice = createSlice({
  name: 'goal',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
})

export const { reset } = goalSlice.actions
export default goalSlice.reducer
