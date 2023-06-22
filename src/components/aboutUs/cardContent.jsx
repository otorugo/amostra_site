export const CardContent = ({ name, role, skills }) => {
  return (
    <div>
      <div className="pic"></div>
      <div className="about">
        <p>{name}</p>
        <p>{role}</p>
        <p>{skills}</p>
      </div>
    </div>
  );
};

const content = [
  {
    name: "Lemos",
    role: "Founder",
    skills:
      "Advertiser, Designer and crypto/NFT enthusiast. He has been a member of the CNFT community since the beginning. With all his marketing and NFTs experience, he now aims to explore and give his full potential in this project.",
  },
  {
    name: "Thiago",
    role: "Artist",
    skills:
      "Born in São Paulo/Brazil, graphic designer by training, he likes to explore different forms of expression. Always looking to learn new skills and connect with people, he found the NFT an opportunity to expand his horizons.",
  },
  {
    name: "Thayna",
    role: "3D Artist",
    skills:
      "Fan of pop culture, passionate about having a good laugh and loves the universe of superheroes. In addition to Graphic Designer, she also works as an Interior Designer and is always open to discover new things and bring news to the NFT universe.",
  },
  {
    name: "Estela",
    role: "Artist",
    skills:
      "Estela has always loved reading books and venturing into creations on and off digital. She has been an art director since 2019, has already worked with clients from various segments and is expanding her activities in the Cardano community.",
  },
];

export const CardList = () => {
  const listItems = content.map((item) => {
    return CardContent(item);
  });
  return <div>{listItems}</div>;
};
