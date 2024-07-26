import create from "zustand";
// const apiUrl = import.meta.env.VITE_API_URL;

const useApi = create((set) => ({
  isLoading: false,
  error: null,
  fetchAnswer: async (question) => {
    set({ isLoading: true, error: null });
    try {
      // API call to send question and get response
      const response = await fetch(`/api/v1/query`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // any other headers of API
        },
        body: JSON.stringify({ question }),
      });

      if (!response.ok) {
        throw new Error("API request failed");
      }

      const data = await response.json();
      set({ isLoading: false });
      return {
        answer: data.answer,
        // link: data.sourceLink // If needed
      };
    } catch (error) {
      set({ isLoading: false, error: error.message });
      return null;
    }
  },
}));

export default useApi;
