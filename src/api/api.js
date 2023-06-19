import axios from 'axios'

const api = axios.get({
    baseUrl: 'http://',
    headers: {
        'Content-type': 'application/json',
        'Authorization': 'API_KEY'
    }
})

export const quizQuestion = async(question) => {
    const data = {
        model: '',
        question,
        examples_context: 'In 2020, the world population was...',
        max_tokens: 50,
    }
    
    const response = await api.post('/engines/davinci-codex/completions', data);
    return response.data.choices[0].text.trim()
}