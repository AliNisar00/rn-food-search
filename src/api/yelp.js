import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer MNhLG7hkDcuLM72L7mszhN1uwZ888XGkdhZwIm-OoP0go4gfYJKpw7EwmcgTXsx4nUVHankVj89zqF1udnzL4KfIUvEugEg4GoG5wQgwFpOQkFA-6wsUezQaAGDgZHYx'
    }
});
