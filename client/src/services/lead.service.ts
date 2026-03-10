import API from "./api";

export const getLeads = async () => {

  const res = await API.get("/leads");

  return res.data.data;

};