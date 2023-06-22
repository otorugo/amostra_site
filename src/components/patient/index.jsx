import LanguageSelector from "../textContent/LanguageSelector";
import {
  NFTInfoDescriptionPt,
  NFTInfoTitlePt,
  TokenInfoDescriptionPt,
} from "../textContent/br/patient";
import {
  NFTInfoDescriptionEn,
  NFTInfoTitleEn,
  TokenInfoDescriptionEn,
  TokenInfoTitleEn,
} from "../textContent/en/patient";
import "./style.css";

const TokenGallery = () => {
  return <div>Token Gallery</div>;
};

const NFTInfo = () => {
  return (
    <div>
      <span>
        <LanguageSelector
          EnComponent={NFTInfoTitleEn}
          PtComponent={NFTInfoTitlePt}
        />
      </span>
      <span>
        <LanguageSelector
          EnComponent={NFTInfoDescriptionEn}
          PtComponent={NFTInfoDescriptionPt}
        />
      </span>
    </div>
  );
};

const TokenInfo = () => {
  return (
    <div>
      <span className="title">
        <LanguageSelector
          EnComponent={TokenInfoTitleEn}
          PtComponent={TokenInfoTitleEn}
        />
      </span>
      <span className="info">
        <LanguageSelector
          EnComponent={TokenInfoDescriptionEn}
          PtComponent={TokenInfoDescriptionPt}
        />
      </span>
    </div>
  );
};


const TokenSurprise = () => {
  return <div>Token Surprise</div>;
};

export default function Patient() {
  return (
    <div className="Pacient">
      <div className="empty"></div>
      <div className="token">
        <TokenGallery />
        <div>Quantidades</div>
        <NFTInfo />
      </div>
      <div className="token_info">
        <TokenInfo />
        <TokenSurprise />
      </div>
      <div className="empty"></div>
    </div>
  );
}
