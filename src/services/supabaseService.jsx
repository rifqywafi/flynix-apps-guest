import axios from 'axios';

export async function supabaseService({ table, method = 'get', data = null }) {
    const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtrc2h1a3VjenR3b3pqcHR0YnNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk0MjcxMDksImV4cCI6MjA2NTAwMzEwOX0.81oJUxs6l4SfAp0L8lIR0AT1qI34WZRf4qG1vk8-o7M";
    const url = `https://kkshukucztwozjpttbsg.supabase.co/rest/v1/${table}`;
    const headers = {
        'apikey': apiKey,
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
    };

    try {
        const response = await axios({
            url,
            method,
            headers,
            data,
        });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error;
    }
}