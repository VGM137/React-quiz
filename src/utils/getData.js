const API = 'https://rickandmortyapi.com/api/character/'

class  getData {
   constructor(level){
    this.apiURL = API
/*     this.data(level) */
  }
/*   async data(level){
    try{
      const response = await fetch(this.apiURL);
      this.firstData = await response.json();
      if(level === 'easy'){
        this.easyData(this.firstData)
      }else if(level === 'medium'){
        this.mediumData(this.firstData)
      }else if(level === 'hard'){
        this.hardData(this.firstData)
      }
    } catch (error) { 
      console.log('Fetch Error', error);
    };
  } */
  async easyData(){
    try{
      const response = await fetch(this.apiURL);
      this.firstData = await response.json();
      let easyCharacters = []
      this.firstData.results.forEach(character => {
        easyCharacters.push(character)
      })
      return easyCharacters
    }catch(error){
      console.log('Fetch Error', error);
    }
  }
  async mediumData(){
    try{
      let mediumCharacters = [];
      let allData = []
      const response = await fetch(this.apiURL);
      this.firstData = await response.json();
      const data = await this.firstData
      allData.push(data)
      for(let i = 2; i <= 5; i++){
        let page = i;
        let next = data.info.next;
        const url = `${next.replace('2', page)}`;
        const pageResponse = await fetch(url);
        const pageData = await pageResponse.json();
        allData.push(pageData);
      };
      await allData.forEach((array) => {
        for(let i = 0; i < array.results.length; i++){
          let character = array.results[i];
          mediumCharacters.push(character);
        }
      });      
      return mediumCharacters;
    } catch (error) { 
      console.log('Fetch Error', error);
    };
  };

  async hardData(){
    try{
      const allData = [];
      let allCharacters = [];
      const response = await fetch(this.apiURL);
      this.firstData = await response.json();
      const data = await this.firstData
      allData.push(data);
      for(let i = 2; i <= data.info.pages; i++){
        let page = i;
        let next = data.info.next;
        const url = `${next.replace('2', page)}`;
        const pageResponse = await fetch(url);
        const pageData = await pageResponse.json();
        allData.push(pageData);
      };
      await allData.forEach((array) => {
        for(let i = 0; i < array.results.length; i++){
          let character = array.results[i];
          allCharacters.push(character);
        }
      });
      return allCharacters;
    } catch (error) { 
      console.log('Fetch Error', error);
    };
  };
};


export default getData