// src/services/api.ts
import axios from "axios";

const API_BASE = `https://cogni-backend-34q2.onrender.com/`;

export const processContent = async (content: string) => {
  const formData = new FormData();
  formData.append("content", content);
  const res = await axios.post(`${API_BASE}/process`, formData);
  return res.data; // { job_id }
};

export const getJobResult = async (job_id: string) => {
  const res = await axios.get(`${API_BASE}/hub/${job_id}`);
  return res.data;
};
