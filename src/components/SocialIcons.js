const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon" style={styles.icon} href="https://github.com/s1iqbal">
        <i className="fa-brands fa-github" aria-hidden="true" title="Saad Iqbal' GitHub Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/saad-iqbal-ryerson/">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="Saad Iqbal LinkedIn Profile"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
