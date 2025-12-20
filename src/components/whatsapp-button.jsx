import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export const WhatsappButton = () => {
    const NUMBER = "+2348068156622";
    const MESSAGE = "Hello, I would like to get in touch with you.";
    const URL = `https://wa.me/${NUMBER}?text=${encodeURIComponent(MESSAGE)}`;
  return (
      <a href={URL}
          style={{
              transition: "transform 0.3s ease-in-out",
              bottom: "20px",
              right: "20px",
              position: "fixed" ,              backgroundColor: "#25D366",
              color: "white",
              padding: "12px",
              borderRadius: "50%",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
              zIndex: 1000,
              width: "50px",
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
          }}
          className="fixed"
      onMouseEnter={e => {
          e.currentTarget.style.transform = "scale(1)";
      }}
      onMouseLeave={e => {
          e.currentTarget.style.transform = "scale(1)";
      }}
      >
          <FontAwesomeIcon icon={faWhatsapp} size="2x" />
      </a>
  )
}
