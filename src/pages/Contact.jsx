import { Helmet } from "@dr.pogodin/react-helmet";

<Helmet>
  <html lang="fr" />
  <title>Contact — Benjamin Fontaine</title>
  <meta name="description" content="Discutons de votre projet front (React), intégration et refonte." />
  <link rel="canonical" href={`${SITE_URL}/contact`} />
</Helmet>


export default function Contact() {
  return (
    <section className="section contact">
      <div className="container" style={{maxWidth: "800px"}}>
        <h1>Contact</h1>
        <p>Un projet en tête, une question ? Écrivez-moi :</p>

        <div style={{margin:"16px 0"}}>
          <p>
            📧 <a href="mailto:mail@test.com">mail@test.com</a><br/>
            🔗 <a href="https://github.com/Bennftn" target="_blank" rel="noreferrer">GitHub</a>
          </p>
        </div>

        <form className="form" onSubmit={(e)=>e.preventDefault()}>
          <label>
            Nom
            <input className="input" type="text" name="name" required />
          </label>
          <label>
            Email
            <input className="input" type="email" name="email" required />
          </label>
          <label>
            Message
            <textarea className="textarea" name="message" rows="6" required />
          </label>
          <button className="btn" type="submit">Envoyer</button>
        </form>
        <p style={{opacity:.7, fontSize:".9rem"}}>
          (Astuce rapide : tu peux aussi cliquer sur l’email ci-dessus pour ouvrir ton application mail.)
        </p>
      </div>
    </section>
  );
}
