class Pokemon {
  pokemon: number;
  picture: string;

  constructor(pokemon: number) {
    this.pokemon = pokemon;
    this.picture = `../pictures/card-poke${pokemon}.png`;
  }
}

export default Pokemon;
