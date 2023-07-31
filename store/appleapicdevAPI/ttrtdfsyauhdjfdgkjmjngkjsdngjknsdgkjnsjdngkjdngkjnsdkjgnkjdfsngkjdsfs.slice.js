import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_ttrtdfsyauhdjfdgkjmjngkjsdngjknsdgkjnsjdngkjdngkjnsdkjgnkjdfsngkjdsf_list = createAsyncThunk(
  "ttrtdfsyauhdjfdgkjmjngkjsdngjknsdgkjnsjdngkjdngkjnsdkjgnkjdfsngkjdsfs/api_v1_ttrtdfsyauhdjfdgkjmjngkjsdngjknsdgkjnsjdngkjdngkjnsdkjgnkjdfsngkjdsf_list",
  async payload => {
    const response = await apiService.api_v1_ttrtdfsyauhdjfdgkjmjngkjsdngjknsdgkjnsjdngkjdngkjnsdkjgnkjdfsngkjdsf_list(
      payload
    )
    return response.data
  }
)
export const api_v1_ttrtdfsyauhdjfdgkjmjngkjsdngjknsdgkjnsjdngkjdngkjnsdkjgnkjdfsngkjdsf_create = createAsyncThunk(
  "ttrtdfsyauhdjfdgkjmjngkjsdngjknsdgkjnsjdngkjdngkjnsdkjgnkjdfsngkjdsfs/api_v1_ttrtdfsyauhdjfdgkjmjngkjsdngjknsdgkjnsjdngkjdngkjnsdkjgnkjdfsngkjdsf_create",
  async payload => {
    const response = await apiService.api_v1_ttrtdfsyauhdjfdgkjmjngkjsdngjknsdgkjnsjdngkjdngkjnsdkjgnkjdfsngkjdsf_create(
      payload
    )
    return response.data
  }
)
export const api_v1_ttrtdfsyauhdjfdgkjmjngkjsdngjknsdgkjnsjdngkjdngkjnsdkjgnkjdfsngkjdsf_retrieve = createAsyncThunk(
  "ttrtdfsyauhdjfdgkjmjngkjsdngjknsdgkjnsjdngkjdngkjnsdkjgnkjdfsngkjdsfs/api_v1_ttrtdfsyauhdjfdgkjmjngkjsdngjknsdgkjnsjdngkjdngkjnsdkjgnkjdfsngkjdsf_retrieve",
  async payload => {
    const response = await apiService.api_v1_ttrtdfsyauhdjfdgkjmjngkjsdngjknsdgkjnsjdngkjdngkjnsdkjgnkjdfsngkjdsf_retrieve(
      payload
    )
    return response.data
  }
)
export const api_v1_ttrtdfsyauhdjfdgkjmjngkjsdngjknsdgkjnsjdngkjdngkjnsdkjgnkjdfsngkjdsf_update = createAsyncThunk(
  "ttrtdfsyauhdjfdgkjmjngkjsdngjknsdgkjnsjdngkjdngkjnsdkjgnkjdfsngkjdsfs/api_v1_ttrtdfsyauhdjfdgkjmjngkjsdngjknsdgkjnsjdngkjdngkjnsdkjgnkjdfsngkjdsf_update",
  async payload => {
    const response = await apiService.api_v1_ttrtdfsyauhdjfdgkjmjngkjsdngjknsdgkjnsjdngkjdngkjnsdkjgnkjdfsngkjdsf_update(
      payload
    )
    return response.data
  }
)
export const api_v1_ttrtdfsyauhdjfdgkjmjngkjsdngjknsdgkjnsjdngkjdngkjnsdkjgnkjdfsngkjdsf_partial_update = createAsyncThunk(
  "ttrtdfsyauhdjfdgkjmjngkjsdngjknsdgkjnsjdngkjdngkjnsdkjgnkjdfsngkjdsfs/api_v1_ttrtdfsyauhdjfdgkjmjngkjsdngjknsdgkjnsjdngkjdngkjnsdkjgnkjdfsngkjdsf_partial_update",
  async payload => {
    const response = await apiService.api_v1_ttrtdfsyauhdjfdgkjmjngkjsdngjknsdgkjnsjdngkjdngkjnsdkjgnkjdfsngkjdsf_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_ttrtdfsyauhdjfdgkjmjngkjsdngjknsdgkjnsjdngkjdngkjnsdkjgnkjdfsngkjdsf_destroy = createAsyncThunk(
  "ttrtdfsyauhdjfdgkjmjngkjsdngjknsdgkjnsjdngkjdngkjnsdkjgnkjdfsngkjdsfs/api_v1_ttrtdfsyauhdjfdgkjmjngkjsdngjknsdgkjnsjdngkjdngkjnsdkjgnkjdfsngkjdsf_destroy",
  async payload => {
    const response = await apiService.api_v1_ttrtdfsyauhdjfdgkjmjngkjsdngjknsdgkjnsjdngkjdngkjnsdkjgnkjdfsngkjdsf_destroy(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const ttrtdfsyauhdjfdgkjmjngkjsdngjknsdgkjnsjdngkjdngkjnsdkjgnkjdfsngkjdsfsSlice = createSlice(
  {
    name:
      "ttrtdfsyauhdjfdgkjmjngkjsdngjknsdgkjnsjdngkjdngkjnsdkjgnkjdfsngkjdsfs",
    initialState,
    reducers: {},
    extraReducers: {
      [api_v1_ttrtdfsyauhdjfdgkjmjngkjsdngjknsdgkjnsjdngkjdngkjnsdkjgnkjdfsngkjdsf_list.pending]: (
        state,
        action
      ) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      },
      [api_v1_ttrtdfsyauhdjfdgkjmjngkjsdngjknsdgkjnsjdngkjdngkjnsdkjgnkjdfsngkjdsf_list.fulfilled]: (
        state,
        action
      ) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      },
      [api_v1_ttrtdfsyauhdjfdgkjmjngkjsdngjknsdgkjnsjdngkjdngkjnsdkjgnkjdfsngkjdsf_list.rejected]: (
        state,
        action
      ) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      },
      [api_v1_ttrtdfsyauhdjfdgkjmjngkjsdngjknsdgkjnsjdngkjdngkjnsdkjgnkjdfsngkjdsf_create.pending]: (
        state,
        action
      ) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      },
      [api_v1_ttrtdfsyauhdjfdgkjmjngkjsdngjknsdgkjnsjdngkjdngkjnsdkjgnkjdfsngkjdsf_create.fulfilled]: (
        state,
        action
      ) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      },
      [api_v1_ttrtdfsyauhdjfdgkjmjngkjsdngjknsdgkjnsjdngkjdngkjnsdkjgnkjdfsngkjdsf_create.rejected]: (
        state,
        action
      ) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      },
      [api_v1_ttrtdfsyauhdjfdgkjmjngkjsdngjknsdgkjnsjdngkjdngkjnsdkjgnkjdfsngkjdsf_retrieve.pending]: (
        state,
        action
      ) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      },
      [api_v1_ttrtdfsyauhdjfdgkjmjngkjsdngjknsdgkjnsjdngkjdngkjnsdkjgnkjdfsngkjdsf_retrieve.fulfilled]: (
        state,
        action
      ) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      },
      [api_v1_ttrtdfsyauhdjfdgkjmjngkjsdngjknsdgkjnsjdngkjdngkjnsdkjgnkjdfsngkjdsf_retrieve.rejected]: (
        state,
        action
      ) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      },
      [api_v1_ttrtdfsyauhdjfdgkjmjngkjsdngjknsdgkjnsjdngkjdngkjnsdkjgnkjdfsngkjdsf_update.pending]: (
        state,
        action
      ) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      },
      [api_v1_ttrtdfsyauhdjfdgkjmjngkjsdngjknsdgkjnsjdngkjdngkjnsdkjgnkjdfsngkjdsf_update.fulfilled]: (
        state,
        action
      ) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      },
      [api_v1_ttrtdfsyauhdjfdgkjmjngkjsdngjknsdgkjnsjdngkjdngkjnsdkjgnkjdfsngkjdsf_update.rejected]: (
        state,
        action
      ) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      },
      [api_v1_ttrtdfsyauhdjfdgkjmjngkjsdngjknsdgkjnsjdngkjdngkjnsdkjgnkjdfsngkjdsf_partial_update.pending]: (
        state,
        action
      ) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      },
      [api_v1_ttrtdfsyauhdjfdgkjmjngkjsdngjknsdgkjnsjdngkjdngkjnsdkjgnkjdfsngkjdsf_partial_update.fulfilled]: (
        state,
        action
      ) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      },
      [api_v1_ttrtdfsyauhdjfdgkjmjngkjsdngjknsdgkjnsjdngkjdngkjnsdkjgnkjdfsngkjdsf_partial_update.rejected]: (
        state,
        action
      ) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      },
      [api_v1_ttrtdfsyauhdjfdgkjmjngkjsdngjknsdgkjnsjdngkjdngkjnsdkjgnkjdfsngkjdsf_destroy.pending]: (
        state,
        action
      ) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      },
      [api_v1_ttrtdfsyauhdjfdgkjmjngkjsdngjknsdgkjnsjdngkjdngkjnsdkjgnkjdfsngkjdsf_destroy.fulfilled]: (
        state,
        action
      ) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      },
      [api_v1_ttrtdfsyauhdjfdgkjmjngkjsdngjknsdgkjnsjdngkjdngkjnsdkjgnkjdfsngkjdsf_destroy.rejected]: (
        state,
        action
      ) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      }
    }
  }
)
export default {
  api_v1_ttrtdfsyauhdjfdgkjmjngkjsdngjknsdgkjnsjdngkjdngkjnsdkjgnkjdfsngkjdsf_list,
  api_v1_ttrtdfsyauhdjfdgkjmjngkjsdngjknsdgkjnsjdngkjdngkjnsdkjgnkjdfsngkjdsf_create,
  api_v1_ttrtdfsyauhdjfdgkjmjngkjsdngjknsdgkjnsjdngkjdngkjnsdkjgnkjdfsngkjdsf_retrieve,
  api_v1_ttrtdfsyauhdjfdgkjmjngkjsdngjknsdgkjnsjdngkjdngkjnsdkjgnkjdfsngkjdsf_update,
  api_v1_ttrtdfsyauhdjfdgkjmjngkjsdngjknsdgkjnsjdngkjdngkjnsdkjgnkjdfsngkjdsf_partial_update,
  api_v1_ttrtdfsyauhdjfdgkjmjngkjsdngjknsdgkjnsjdngkjdngkjnsdkjgnkjdfsngkjdsf_destroy,
  slice: ttrtdfsyauhdjfdgkjmjngkjsdngjknsdgkjnsjdngkjdngkjnsdkjgnkjdfsngkjdsfsSlice
}
