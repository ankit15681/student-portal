import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

// export const insertMovie = payload => api.post(`/student`, payload)
export const getAllColleges = () => api.get(`/movies`)
export const getAllStudents = () => api.get(`/students`)
// export const updateMovieById = (id, payload) => api.put(`/movie/${id}`, payload)
// export const deleteMovieById = id => api.delete(`/movie/${id}`)
export const getCollegeById = id => api.get(`/colleges/${id}`)
export const getStudentById = id => api.get(`/students/${id}`)

const apis = {
    getAllColleges,
    getAllStudents,
    getCollegeById,
    getStudentById
}

export default apis