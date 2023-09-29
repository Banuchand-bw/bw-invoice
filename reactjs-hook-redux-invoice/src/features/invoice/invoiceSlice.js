import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import http from "../../http-common";

export const fetchInvoices = createAsyncThunk(
    'invoices/fetchInvoices',
    async () => {
        const response = await http.get('/invoices');
        return response.data;
    }
);

export const updateInvoice = createAsyncThunk(
    'invoices/updateInvoice',
    async (invoice) => {
        const response = await http.put(`/invoices/${invoice.id}`, invoice);
        return response.data;
    }
);

export const deleteInvoice = createAsyncThunk(
    'invoices/deleteInvoice',
    async (id) => {
        await http.delete(`/invoices/${id}`);
        return id;
    }
);

export const createInvoice = createAsyncThunk(
    'invoices/createInvoice',
    async (invoiceData) => {
        const response = await http.post('/invoices', invoiceData);
        return response.data;
    }
);

export const fetchSingleInvoice  = createAsyncThunk(
    'invoices/fetchSingleInvoice ',
    async (id) => {
        const response = await http.get(`/invoices/${id}`);
        return response.data;
    }
);


const invoiceSlice = createSlice({
    name: 'invoices',
    initialState: {
        invoices: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchInvoices.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchInvoices.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.invoices = action.payload;
            })
            .addCase(fetchInvoices.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(updateInvoice.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateInvoice.fulfilled, (state, action) => {
                state.status = 'succeeded';
                const updatedInvoice = action.payload;
                const index = state.invoices.findIndex(
                    (invoice) => invoice.id === updatedInvoice.id
                );
                if (index !== -1) {
                    state.invoices[index] = updatedInvoice;
                }
            })
            .addCase(updateInvoice.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(deleteInvoice.fulfilled, (state, action) => {
                const deletedId = action.payload;
                state.invoices = state.invoices.filter(
                    (invoice) => invoice.id !== deletedId
                );
            })
            .addCase(createInvoice.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createInvoice.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.invoices.push(action.payload);
            })
            .addCase(createInvoice.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(fetchSingleInvoice.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchSingleInvoice.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.invoices = action.payload;
            })
            .addCase(fetchSingleInvoice.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default invoiceSlice.reducer;