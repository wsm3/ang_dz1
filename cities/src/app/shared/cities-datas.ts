
export interface City {
  name        :string;
  weather     :string;
  img        :string,
  area        :number;
  population  :number;
}


export class CitiesData {
  private Cities: City[] = [
    {
      name:'NewYork',
      weather: '10',
      img: 'https://www.enel.com/it/media/news/d/2019/09/enel-new-york-decarbonizzazione-clima/jcr:content/carousel/items/image.img.jpg/1566896554716.jpg',
      area: 121337,
      population: 8175133
    },
    {
      name: 'Moscow',
      weather: '8',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Panoramic_view_of_Moscow2.jpg/650px-Panoramic_view_of_Moscow2.jpg',
      area: 2511,
      population: 12506468
    },
    {
      name: 'Rome',
      weather: '12',
      img: 'https://images.unsplash.com/photo-1531572753322-ad063cecc140?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      area: 1285,
      population:4355725
    },
    {
      name: 'Madrid',
      weather: '14',
      img: 'https://traveller-eu.ru/sites/default/files/inline-images/madrid-1200-1280x736.jpg',
      area: 604,
      population:3165541
    }
  ];

  constructor() {}

  public getAllData = (): City[] => this.Cities;

  public getDataByName = (name:string) => this.getAllData().filter(function (city) {return city.name === name;});

}








