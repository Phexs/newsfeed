class NewsLibrary{
   
    async getNews() {
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=gb&apiKey=89629d684fbc4e59bac9a9ed95f2d196');
        const responseData = await response.json();
        return responseData.articles;
    }
}
// const response = await fetch('https://newsapi.org/v2/top-headlines?+10'+'country=us&'+'apiKey=89629d684fbc4e59bac9a9ed95f2d196');