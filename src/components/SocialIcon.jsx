export default function SocialIcon({ icon, link }) {
  return (
    <div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={icon} alt="social_media icon" />
      </a>
    </div>
  );
}
