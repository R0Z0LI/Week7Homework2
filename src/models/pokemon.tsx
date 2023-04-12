class Pokemon {
  id: number;
  picture: string;

  constructor(id: number) {
    this.id = id;
    this.picture = `../pictures/card-poke${id}.png`;
  }
}

export default Pokemon;
