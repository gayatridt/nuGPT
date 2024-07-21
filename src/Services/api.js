import create from 'zustand';

const useApi = create((set) => ({
  isLoading: false,
  error: null,
  fetchAnswer: async (question) => {
    set({ isLoading: true, error: null });
    try {
      // API call
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          const encodedQuestion = encodeURIComponent(question);
          resolve({
            answer: `Here's what I found about "${question}":`,
            link: `https://en.wikipedia.org/wiki/${encodedQuestion}`
          });
        }, 1000); // 1 second delay
      });
      set({ isLoading: false });
      return response;
    } catch (error) {
      set({ isLoading: false, error: error.message });
      return null;
    }
  }
}));

export default useApi;