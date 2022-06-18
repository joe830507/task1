import request from "./request";

export function getUniversities(params) {
  return request.get("/search", { params });
}
