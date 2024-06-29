import axios from 'axios';

const EdamamApi = axios.create({
  baseURL: 'https://api.edamam.com/api/recipes/v2',
  params: {
    app_id: process.env.ID,
    app_key: process.env.KEY,
  },
});

export default EdamamApi