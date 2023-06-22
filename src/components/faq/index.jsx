import "./styles.css";

function FaqCard() {
  return (
    <div>
      <p>How many Quasar Notes are there?</p>
      <p>
        There will be 9300 NFTs from Quasar Notes.3100 is for the 1st collection
        called Time Travel. 100 have been reserved for promotions, promoters,
        giveaways, and the 6 1/1 team Quasar.The other 6200 will be available
        for minting soon.
      </p>
    </div>
  );
}

export default function Faq() {
  return (
    <div className="Faq" id="faq">
      <div className="title">
        <p>FAQ - Frequently Asked Questions</p>
      </div>
      <div className="answer">
        <FaqCard />
      </div>
      <div>
        <p>
          Texto legal sobre como a historia é apenas ficticia e não real, bla
          bla bla
        </p>
      </div>
    </div>
  );
}
