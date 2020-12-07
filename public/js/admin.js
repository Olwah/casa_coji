/* eslint-disable */
import '@babel/polyfill';
import axios from 'axios';
import { showAlert } from './alerts';

export const createItem = async (data, type) => {
    console.log(data);
    try {
        const url = `/api/${type}`;
        const res = await axios({
            headers: { 'Content-Type': 'multipart/form-data' },
            method: 'POST',
            url,
            data
        });

        if (res.data.status === 'success') {
            showAlert(
                'success',
                `New ${type.toUpperCase()} added successfully!`
            );
        }
    } catch (err) {
        showAlert('error', err.response.data.message);
    }
};
