import React, { useState, useEffect } from "react";
import "../styles/content.css";
import seaview from "../images/seaview.jpg"
import mountainview from "../images/mountainview.jpg"
import autumeseason from "../images/autumeseason.jpg"
import hotelview from "../images/hotelview.jpg"
import ceo from "../images/ceo.pt2.jpg"
import nikkiShoes from "../images/nikkiShoes.jpg"
import menKits from "../images/menKits.jpg"
import bluetoothWatch from "../images/bluetoothWatch.jpg"
import someProduct from "../images/someProduct.jpg"
import cocoPerfume from "../images/cocoPerfume.jpg"
import cocoOil from "../images/cocoOil.jpg"

const Content = () => {
  const [greeting, setGreeting] = useState("");
  const [slideIndex, setSlideIndex] = useState(1);

  const slides = [
    { src: seaview, alt: "Sea View" },
    { src: mountainview, alt: "Mountain View" },
    { src: autumeseason, alt: "Autume Season" },
    { src: hotelview, alt: "Hotel View" },
  ];

  const plusSlides = (n) => {
    let newIndex = slideIndex + n;
    if (newIndex > slides.length) {
      newIndex = 1;
    } else if (newIndex < 1) {
      newIndex = slides.length;
    }
    setSlideIndex(newIndex);
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  useEffect(() => {
    fetch("http://localhost:8080/greetings")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not okay");
        }
        return response.json();
      })
      .then((data) => {
        setGreeting(data.message);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  return (
    <div className="App">
        <div className="container">
            {slides.map((slide, index) => (
                <div
                key={index}
                className="mySlides"
                style={{ display: slideIndex === index + 1 ? "block" : "none" }}
                >
                <div className="numbertext">{index + 1} / {slides.length}</div>
                <img src={slide.src} alt={slide.alt} style={{ width: "100%" }} />
                </div>
            ))}

            <a className="prev" onClick={() => plusSlides(-1)}> ❮ </a>
            <a className="next" onClick={() => plusSlides(1)}> ❯ </a>

            <div className="caption-container">
                <p id="caption">{slides[slideIndex - 1].alt}</p>
            </div>

            <div className="dots-container">
                {slides.map((slide, index) => (
                <span
                    key={index}
                    className={`dot ${slideIndex === index + 1 ? "active" : ""}`}
                    onClick={() => currentSlide(index + 1)}
                ></span>
                ))}
            </div>
        </div>

        <br />
        <br />

        <h1>{greeting}</h1>

        <br />
        <br />

        <h1 style={{ textAlign: "center" }}><strong>About Us: </strong></h1>
        <div>
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo corporis illum sapiente est aliquid dolore architecto at 
            beatae alias sint harum, dolorum id saepe incidunt ratione aliquam laudantium molestiae facere. Lorem ipsum dolor sit, amet 
            consectetur adipisicing elit. Hic nemo cumque amet quas voluptates sit ad est, ab, at doloremque earum, ducimus nulla enim 
            veniam harum sint accusamus voluptatum soluta. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum eveniet 
            consectetur voluptatibus sunt, expedita doloribus quia quod repudiandae nihil odit saepe? Aliquid libero placeat dignissimos. 
            Sequi vitae optio molestias cupiditate!
        </p>
        </div>

        <br />
        <br />

        <h1 style={{ textAlign: "center" }}><strong>CEO Inspiration: </strong></h1>
        <div className="rowTI">
        <div className="columnText">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum aliquid cupiditate minus voluptatem vitae ipsam quibusdam fugit 
            fuga dolorum magnam? Hic, praesentium enim. Aliquid mollitia perferendis, numquam minima molestias hic.
        </div>
        <div className="columnImage">
            <img src={ceo} alt="someone/something" />
        </div>
        </div>

        <br />
        <br />

        <h1 style={{ textAlign: "center" }}><strong>Company Products: </strong></h1>
        <div className="row">
        <div className="column">
            <img src={nikkiShoes} alt="nikki shoes" />
            <h3 style={{ textAlign: "center" }}>Nikki Shoes</h3>
        </div>
        <div className="column">
            <img src={menKits} alt="men kits" />
            <h3 style={{ textAlign: "center" }}>Men Kits</h3>
        </div>
        <div className="column">
            <img src={bluetoothWatch} alt="bluetooth watch" />
            <h3 style={{ textAlign: "center" }}>Bluetooth Watches</h3>
        </div>
        </div>

        <br />
        <br />

        <div className="row">
        <div className="column">
            <img src={someProduct} alt="some random product" />
            <h3 style={{ textAlign: "center" }}>Face Cream</h3>
        </div>
        <div className="column">
            <img src={cocoPerfume} alt="coco perfumes" />
            <h3 style={{ textAlign: "center" }}>CoCo Perfumes</h3>
        </div>
        <div className="column">
            <img src={cocoOil} alt="coco oil" />
            <h3 style={{ textAlign: "center" }}>CoCo Oils</h3>
        </div>
        </div>

        <br />
        <br />

        <h1 style={{ textAlign: "center" }}><strong>Company's Future Goal: </strong></h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae veniam fugit, libero officiis accusamus 
            magni ea amet itaque laboriosam pariatur unde culpa ipsa in est ad! Libero quisquam quasi odio? Lorem ipsum dolor sit amet 
            consectetur, adipisicing elit. Consequuntur, delectus. Non perferendis minus consequuntur, aperiam dolores enim est 
            modi illo! Deserunt optio explicabo asperiores impedit, id iusto vero ex veritatis. Lorem ipsum dolor sit amet consectetur, 
            adipisicing elit. Libero soluta repellat tenetur similique beatae id ab? Accusantium, vero sequi sunt reiciendis id neque 
            cum excepturi tenetur, tempore, assumenda perspiciatis possimus.
        </p>
        
        <br />
        
        <strong style={{ textAlign: "center" }}>Other Criteria Goals: </strong>

        <br />
        
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti rerum soluta perspiciatis cum unde blanditiis odit, 
            a aperiam nemo suscipit laborum voluptatem fugit alias nulla non, culpa porro, ipsa aliquid? Lorem ipsum dolor, sit amet 
            consectetur adipisicing elit. Autem neque amet cupiditate asperiores corporis voluptatum, quisquam nobis perferendis 
            consequatur ad repellendus dignissimos ducimus ullam? Fuga illo itaque id laudantium possimus? Lorem ipsum dolor sit amet 
            consectetur adipisicing elit. Debitis at unde voluptate sed voluptatem nisi eum voluptatum impedit amet quaerat! Amet 
            obcaecati, nobis accusantium asperiores commodi corporis doloremque aperiam repellendus.
        </p>

        <br />
        <br />

        <h1 style={{ textAlign: "center" }}><strong>User's Thoughts: </strong></h1>
        <div className="row">
        <div className="column">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nostrum, aliquid, hic nihil molestias, 
                impedit harum animi dolores veritatis obcaecati reprehenderit placeat voluptatum. Qui nostrum culpa quas 
                quibusdam quaerat provident.
            </p>
            <h3 style={{ textAlign: "center" }}><strong>Dutch Vendersons: </strong></h3>
        </div>
        <div className="column">
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, reiciendis quibusdam. Corrupti, quos 
                tempora soluta similique quasi esse voluptates temporibus omnis harum ut totam ex natus molestias eaque minus dolorem?
            </p>
            <h3 style={{ textAlign: "center" }}><strong>Hosea Metheaw: </strong></h3>
        </div>
        <div className="column">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque odit nemo est alias, 
                dignissimos odio minima eum sed ut recusandae laborum iure, aliquid maiores labore quisquam molestiae 
                provident nihil? Laborum.
            </p>
            <h3 style={{ textAlign: "center" }}><strong>Arthur Morgan: </strong></h3>
        </div>
        </div>

    </div>
  );
};

export default Content;