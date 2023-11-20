const Footer = () => {
  return (
    <footer>
      <div
        style={{
          width: "100%",
          minHeight: "20vh",
          maxHeight: "30vh",
          marginTop: 60,
        }}
      >
        <p style={{ fontSize: "30px", textAlign: "center", padding: "20px" }}>
          <span>
            <div
              style={{ color: "white" }}
              className="nav-link"
            >
              Made by Nikhil-Singh
            </div>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;